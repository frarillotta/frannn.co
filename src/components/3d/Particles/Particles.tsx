import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import {
    NoBlending,
    Color,
    UniformsLib,
    UniformsUtils,
    ShaderMaterial,
    BackSide,
    DoubleSide,
} from "three";
import { curlNoise } from "../../shaders/curlNoise";
import palettes from 'nice-color-palettes';
import { isSafari } from "@/detectBrowser";

const getRandomPalette = () => {
    return palettes[Math.floor(Math.random() * palettes.length)];
}

const getRandomColors = () => {
    const palette = [...getRandomPalette()];
    const color1Index = Math.floor(Math.random() * palette.length)
    const color1 = palette[color1Index];
    // avoid getting the same color twice by removing it from the array
    palette.splice(color1Index, 1);
    const color2 = palette[Math.floor(Math.random() * palette.length)];
    return [color1, color2]
}


const fragmentShader = `

	varying vec3 vColor;
	varying vec4 vWorldPosition;

	#include <common>
	#include <packing>
	#include <fog_pars_fragment>
	#include <bsdfs>
	#include <lights_pars_begin>
	#include <shadowmap_pars_fragment>
	#include <shadowmask_pars_fragment>

	void main() {
		#include <logdepthbuf_fragment>

		vec3 color = vColor;

		// Light point
		// float strength = distance(gl_PointCoord, vec2(0.5));
		// strength = 1.0 - strength;
		// strength = pow(strength, 5.0);

		// Disc
		float strength = distance(gl_PointCoord, vec2(0.5));
		strength = step(0.5, strength);
		strength = 1.0 - strength;
        
		color =  mix(vec3(0.0), color, strength);
        if (color == vec3(0.)) discard;
        // float shadowMask = max(0.25, getShadowMask());
		// color *= shadowMask;
	
		gl_FragColor = vec4(color, 1.);
        // discard;
	}
`;
const vertexShader = `
	uniform sampler2D uPositions;
	uniform vec3 uOuterColor;
	uniform vec3 uInnerColor;
	uniform float uCurlIntensity;
	uniform float uCurlAmplitude;
	uniform float uSelectedShape;
	uniform float uParticleSize;
	uniform float uSizeAttenuationMultiplier;
	uniform float uTime;
	varying vec4 vWorldPosition;
	varying vec2 vHighPrecisionZW;
	const float PI = 3.1415926535897932384626433832795;
	${curlNoise}
	varying vec3 vColor;

	#include <common>
	#include <shadowmap_pars_vertex>
  
	void main() {
		float u = position.x;
		float v = position.y;
		vec3 pos = position;

		float distanceColorMultiplier = 0.01;

        pos += curlNoise(pos * (uCurlIntensity * (uTime * 0.0075))) * uCurlAmplitude;

		vec4 worldPosition = modelMatrix * vec4(pos.xyz, 1.0);
		vec4 mvPosition = viewMatrix * worldPosition;
		vec4 projectedPosition = projectionMatrix * mvPosition;
		
		vWorldPosition = worldPosition;

		gl_PointSize = uParticleSize;

		// Size attenuation;
		gl_PointSize *= (uSizeAttenuationMultiplier / - mvPosition.z);
		// gl_PointSize *= 5.;
		gl_Position = projectedPosition;

		float dist = distance(pos, vec3(.0));
		
		vColor = mix(uInnerColor, uOuterColor, pow(dist * 0.095, 2.));
        
		vHighPrecisionZW = gl_Position.zw;
		#include <beginnormal_vertex>
		#include <defaultnormal_vertex>
		#include <logdepthbuf_vertex>
		#include <fog_vertex>
		#include <shadowmap_vertex>

	}
`;
const vertexShaderWithoutAttenuation = vertexShader.replace('gl_PointSize *= (uSizeAttenuationMultiplier / - mvPosition.z);', '').replace('gl_PointSize = uParticleSize;', 'gl_PointSize = 2.;')

const depthFragmentShader = `

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

varying vec2 vHighPrecisionZW;

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( 1.0 );

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>

	#include <logdepthbuf_fragment>

	// Higher precision equivalent of gl_FragCoord.z. This assumes depthRange has been left to its default values.
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;

	gl_FragColor = packDepthToRGBA( fragCoordZ );
}
`;


const [innerColor, outerColor] = getRandomColors()
const mobileViewportBreak = 3.5;
const ParticlesElem = () => {
    const points = useRef();
    const viewport = useThree((state) => state.viewport);
    const dpr = viewport.dpr;

    const width = (Math.trunc(viewport.width * 100)/100);
    const isMobileOrSafari = width < mobileViewportBreak || isSafari;

    const particlesCount = isMobileOrSafari ? 600 : 400;
    const uniforms = useMemo(() => UniformsUtils.merge([
        UniformsLib.lights,
        {
            uPositions: {
                value: null,
            },
            uInnerColor: {
                value: new Color(innerColor)
            },
            uOuterColor: {
                value: new Color(outerColor)
            },
            uSelectedShape: {
                value: 1
            },
            uParticleSize: {
                value: 5.0 * dpr
            },
            uSizeAttenuationMultiplier: {
                value: 5,
            },
            uTime: {
                value: 0,
            },
            uCurlIntensity: {
                value: 0.75,
            },
            uCurlAmplitude: {
                value: 0.9,
            }
        }]), [dpr])

    const particlesPosition = useMemo(() => {
        const length = particlesCount * particlesCount;
        const particles = new Float32Array(length * 3);
        const phi = Math.PI * (Math.sqrt(5.) - 1.);

        for (let i = 0; i < length; i++) {
            const i3 = i * 3;

            let x: number;
            let y: number;
            let z: number;

            //calculate this on CPU cause i need iterations
            y = 1 - (i / (length)) * 2;
            const radius = Math.sqrt(1 - y * y);
            const theta = phi * i;
            x = Math.cos(theta) * radius
            // flatttt
            z = 0;
            // z = Math.sin(theta) * radius
            x *= 5;
            y *= 5;
            z *= 5;

            particles[i3 + 0] = x;
            particles[i3 + 1] = y;
            particles[i3 + 2] = z;
        }

        return particles;

    }, [particlesCount]);

    useFrame(({clock}) => {
        uniforms.uTime.value = clock.elapsedTime + 30;
    });

    return (
        <points
            castShadow
            receiveShadow
            key={`points${particlesPosition.length}`}
            frustumCulled={false}
            //idk how to make you happy
            //@ts-ignore
            ref={points}
            customDepthMaterial={new ShaderMaterial({
                vertexShader: vertexShaderWithoutAttenuation,
                fragmentShader: depthFragmentShader,
                uniforms: uniforms,
                depthTest: true,
                depthWrite: true,
                side: BackSide,
                blending: NoBlending
            })}
        // customDistanceMaterial={
        // 	new ShaderMaterial({
        // 		vertexShader: distanceVertex,
        // 		fragmentShader: distanceFragment,
        // 		uniforms: uniforms,
        // 		depthTest: true,
        // 		depthWrite: true,
        // 		side: BackSide,
        // 		blending: MultiplyBlending
        // 	})
        // }
        >
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particlesPosition.length / 3}
                    array={particlesPosition}
                    itemSize={3}
                />
            </bufferGeometry>
            <shaderMaterial
                lights={true}
                shadowSide={DoubleSide}
                depthTest={true}
                depthWrite={true}
                fragmentShader={fragmentShader}
                vertexShader={vertexShader}
                uniforms={uniforms}
                blending={NoBlending}

            />
        </points>
    );
};

export const Particles = () => {
    const viewport = useThree((state) => state.viewport);
    const width = (Math.trunc(viewport.width * 100)/100);
    const isMobileOrSafari = width < mobileViewportBreak || isSafari;
    return (
        <>
            <ambientLight intensity={2.5} />
            <directionalLight
                castShadow={isMobileOrSafari ? false : true}
                color={"white"}
                position={[10, 3, 4]}
                intensity={20}
                shadow-mapSize-width={2048 * 8}
                shadow-mapSize-height={2048 * 6}
                shadow-camera-near={1}
                shadow-camera-far={50}
                shadow-camera-left={-40}
                shadow-camera-right={40}
                shadow-camera-top={40}
                shadow-camera-bottom={-40}
                // shadow-bias={-0.0001}
                shadow-darkness={0.45}
            />
            <PerspectiveCamera
                makeDefault
                fov={40}
                position={[-1, 2, 7]}
                rotation={[-Math.PI / 8, Math.PI / 6, 0]}
            // lookAt={() => new Vector3(-4, -10, 0)}
            />
            <ParticlesElem />
            <mesh position={[0, 0, -2]} receiveShadow>
                <planeGeometry args={[80, 80, 80, 80]} />
                <meshStandardMaterial color="#ffffff" />
            </mesh>
        </>
    );
};

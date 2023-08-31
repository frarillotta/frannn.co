import { useFrame, useThree } from "@react-three/fiber";
import { OrthographicCamera, useTexture } from "@react-three/drei";
import {} from 'framer-motion'
import {
    Vector2,
} from "three";
import { useState } from "react";

type ShaderBaseProps = { fragmentShader: string, texture?: string }

export const ShaderBase: React.FC<ShaderBaseProps> = ({fragmentShader, texture}) => {

    if (texture) return <ShaderBaseWithTexture fragmentShader={fragmentShader} texture={texture} />

    return <ShaderBaseWithoutTexture fragmentShader={fragmentShader} />

}

const ShaderBaseWithoutTexture: React.FC<Omit<ShaderBaseProps, 'texture'>> = ({ fragmentShader }) => {

    const viewport = useThree(state => state.viewport);
    const uniforms = {
        u_time: { value: 0 },
        u_resolution: { value: new Vector2() },
    };
    useFrame(({ clock, viewport }) => {
        uniforms.u_resolution.value.set(viewport.width, viewport.height);
        uniforms.u_time.value = clock.elapsedTime;
    });

    return (
        <>
            <OrthographicCamera
                makeDefault
                // zoom={600}
                args={[
                    -1, // left
                    1, // right
                    1, // top
                    -1, // bottom
                    -1, // near,
                    1, // far
                ]}
            />
            <mesh scale={[viewport.width, viewport.height, 1]}>
                <planeGeometry args={[2, 2]} />
                <shaderMaterial
                    uniforms={uniforms}
                    fragmentShader={fragmentShader}
                />
                {/* <meshBasicMaterial color="red" /> */}

            </mesh>
        </>
    );
};

const ShaderBaseWithTexture: React.FC<Required<ShaderBaseProps>> = ({ fragmentShader, texture }) => {

    const viewport = useThree(state => state.viewport);
    const tex = useTexture(texture);
    const uniforms = {
        u_time: { value: 0 },
        u_resolution: { value: new Vector2() },
        u_texture_1: { type: "t", value: tex }
    };
    useFrame(({ clock, viewport }) => {
        uniforms.u_resolution.value.set(viewport.width, viewport.height);
        uniforms.u_time.value = clock.elapsedTime;
    });

    return (
        <>
            <OrthographicCamera
                makeDefault
                args={[
                    -1, // left
                    1, // right
                    1, // top
                    -1, // bottom
                    -1, // near,
                    1, // far
                ]}
            />
            <mesh scale={[viewport.width, viewport.height, 1]}>
                <planeGeometry args={[2, 2]} />
                <shaderMaterial
                    uniforms={uniforms}
                    fragmentShader={fragmentShader}
                />
            </mesh>
        </>
    );
};

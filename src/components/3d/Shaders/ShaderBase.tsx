import { useFrame, useThree } from "@react-three/fiber";
import { OrthographicCamera, useTexture } from "@react-three/drei";
import { } from 'framer-motion'
import {
    Texture,
    Vector2,
} from "three";
import { useEffect, useState } from "react";

type ShaderBaseProps = { fragmentShader: string, texture?: string }

export const ShaderBase: React.FC<ShaderBaseProps> = ({ fragmentShader, texture }) => {

    if (texture) return <ShaderBaseWithTexture fragmentShader={fragmentShader} texture={texture} />

    return <ShaderBaseComponent fragmentShader={fragmentShader} />

}

const ShaderBaseComponent: React.FC<Omit<ShaderBaseProps, 'texture'> & { texture?: Texture }> = ({ fragmentShader, texture }) => {

    const viewport = useThree(state => state.viewport);
    const uniforms = {
        u_time: { value: 0 },
        u_resolution: { value: new Vector2() },
        u_texture_1: { type: "t", value: texture }
    };

    const width = viewport.width * viewport.dpr;
    const height = viewport.height * viewport.dpr;
    useEffect(() => {
        uniforms.u_resolution.value.set(width, height);
    })
    useFrame(({ clock }) => {
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
            <mesh scale={[width, height, 1]}>
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

    const tex = useTexture(texture);

    return (
        <ShaderBaseComponent fragmentShader={fragmentShader} texture={tex} />
    );
};

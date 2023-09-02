'use client'

import dynamic from "next/dynamic"
import { GithubIcon } from '@/components/GithubIcon/GithubIcon';
import styled from "styled-components";
import fragmentShader from '@/components/shaders/ditherTexture';
import { ShaderBase } from "@/components/3d/Shaders/ShaderBase";

const Canvas = dynamic(() => import('@/components/canvas/Canvas').then((mod) => mod.Canvas), {
    ssr: false
})

export default () => {
    return <>
        <Canvas>
            <ShaderBase fragmentShader={fragmentShader(false)} texture={'/anseladams.jpg'} />
        </Canvas>
        <GithubWrapper href="https://github.com/frarillotta/frannn.co/blob/master/src/components/3d/Shaders/DitherTexture/worker.tsx#L6" target="_blank">
            <GithubIcon />
        </GithubWrapper>
    </>
}

const GithubWrapper = styled.a`
    position: absolute;
    bottom: 12px;
    right: 12px;
    filter: invert(1);
    mix-blend-mode: difference;
`

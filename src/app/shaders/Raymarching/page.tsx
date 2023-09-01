'use client'

import dynamic from "next/dynamic"
import { GithubIcon } from '@/components/GithubIcon/GithubIcon';
import styled from "styled-components";

const Raymarching = dynamic(() => import('@/components/3d/Shaders/Raymarching/Raymarching').then((mod) => mod.Raymarching), {
    ssr: false
})
export default () => {
    return <>
        <Raymarching />
        <GithubWrapper  href="https://github.com/frarillotta/frannn.co/blob/master/src/components/3d/Shaders/Raymarching/worker.tsx#L6"  target="_blank">
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

'use client'

import dynamic from "next/dynamic"
import { GithubIcon } from '@/components/GithubIcon/GithubIcon';
import styled from "styled-components";

const DitherTexture = dynamic(() => import('@/components/3d/Shaders/DitherTexture/DitherTexture').then((mod) => mod.DitherTexture), {
    ssr: false
})
export default () => {
    return <>
        <DitherTexture />
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

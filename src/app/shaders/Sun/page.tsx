'use client'

import dynamic from "next/dynamic"
import { GithubIcon } from '@/components/GithubIcon/GithubIcon';
import styled from "styled-components";

const Sun = dynamic(() => import('@/components/3d/Shaders/Sun/Sun').then((mod) => mod.Sun), {
    ssr: false
})
export default () => {
    return <>
        <Sun />
        <GithubWrapper  href="https://github.com/frarillotta/frannn.co/blob/master/src/components/3d/Shaders/Sun/worker.tsx#L6"  target="_blank">
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
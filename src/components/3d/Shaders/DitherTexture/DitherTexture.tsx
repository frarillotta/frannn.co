'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { GithubIcon } from '@/components/GithubIcon/GithubIcon'

const Canvas = dynamic(() => import('@/components/canvas/Canvas').then((mod) => mod.Canvas), {
    ssr: false
})
const worker = new Worker(new URL('@/components/3d/Shaders/DitherTexture/worker.tsx', import.meta.url), { type: 'module' })

export function DitherTexture() {

    return (
        <Wrapper>
            <Canvas worker={worker} />
            {/* <Github /> */}
        </Wrapper>
    )
}

const Github = styled(GithubIcon)`
    position: absolute;
    bottom: 8px;
    filter: invert(1);
    right: 8px;
`;

const Wrapper = styled(motion.div)`
    height: 100%;
    position: relative;
`

'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { GithubIcon } from '@/components/GithubIcon/GithubIcon'

const Canvas = dynamic(() => import('@/components/canvas/Canvas').then((mod) => mod.Canvas), {
    ssr: false
})
const worker = new Worker(new URL('@/components/3d/Shaders/VolumeLight/worker.tsx', import.meta.url), { type: 'module' })

export function VolumeLight() {

    return (
            <Canvas worker={worker} />
    )
}

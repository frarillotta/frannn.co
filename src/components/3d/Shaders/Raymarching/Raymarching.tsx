'use client'

import dynamic from 'next/dynamic'
const Canvas = dynamic(() => import('@/components/canvas/OffscreenCanvas').then((mod) => mod.Canvas), {
    ssr: false
})
const worker = new Worker(new URL('@/components/3d/Shaders/Raymarching/worker.tsx', import.meta.url), { type: 'module' })

export function Raymarching() {

    return (
        <Canvas worker={worker} />
    )
}

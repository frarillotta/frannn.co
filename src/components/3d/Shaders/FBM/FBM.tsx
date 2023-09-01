'use client'

import dynamic from 'next/dynamic'

const Canvas = dynamic(() => import('@/components/canvas/Canvas').then((mod) => mod.Canvas), {
    ssr: false
})
const worker = new Worker(new URL('@/components/3d/Shaders/FBM/worker.tsx', import.meta.url), { type: 'module' })

export function FBM() {

    return (
        <Canvas worker={worker} />
    )
}

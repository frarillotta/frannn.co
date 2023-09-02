'use client'

import dynamic from 'next/dynamic'
import { isSafari } from '@/detectBrowser'
import { ImageWrapper, Image } from '@/components/Image/Image'
import rayMarchingFallback from 'public/sdfSafariFallback.png';

const Canvas = dynamic(() => import('@/components/canvas/OffscreenCanvas').then((mod) => mod.Canvas), {
    ssr: false
})
const worker = new Worker(new URL('@/components/3d/Shaders/Raymarching/worker.tsx', import.meta.url), { type: 'module' })

export function Raymarching() {

    return (
        <>
            {!isSafari ? <Canvas worker={worker} /> : <ImageWrapper>
                <Image fill={true} src={rayMarchingFallback} alt="ray Marching image" />
            </ImageWrapper>}
        </>
    )
}

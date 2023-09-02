'use client'

import dynamic from 'next/dynamic'
import { isSafari } from '@/detectBrowser'
import { ImageWrapper, Image } from '@/components/Image/Image'
import simplexNoiseSafariFallback from 'public/simplexNoiseSafariFallback.png';

const Canvas = dynamic(() => import('@/components/canvas/OffscreenCanvas').then((mod) => mod.Canvas), {
    ssr: false
})
const worker = new Worker(new URL('@/components/3d/Shaders/SimplexNoise/worker.tsx', import.meta.url), { type: 'module' })

export function SimplexNoise() {

    return (
        <>
            {!isSafari ? <Canvas worker={worker} /> : <ImageWrapper>
                <Image fill={true} src={simplexNoiseSafariFallback} alt="simplex noise image" />
            </ImageWrapper>}
        </>
    )
}

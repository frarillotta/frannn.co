'use client'

import dynamic from 'next/dynamic'
import { isSafari } from '@/detectBrowser'
import { ImageWrapper, Image } from '@/components/Image/Image'
import ditherTextureSafariFallback from 'public/ditherTextureSafariFallback.png';

const Canvas = dynamic(() => import('@/components/canvas/OffscreenCanvas').then((mod) => mod.Canvas), {
    ssr: false
})
const worker = new Worker(new URL('@/components/3d/Shaders/DitherTexture/worker.tsx', import.meta.url), { type: 'module' })

export function DitherTexture() {

    return (
        <>
            {!isSafari ? <Canvas worker={worker} /> : <ImageWrapper>
                <Image fill={true} src={ditherTextureSafariFallback} alt="dither texture image" />
            </ImageWrapper>}
        </>

    )
}

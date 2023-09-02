'use client'

import dynamic from 'next/dynamic'
import { isSafari } from '@/detectBrowser'
import { ImageWrapper, Image } from '@/components/Image/Image'
import sunSafariFallback from 'public/sunSafariFallback.png';

const Canvas = dynamic(() => import('@/components/canvas/OffscreenCanvas').then((mod) => mod.Canvas), {
    ssr: false
})
const worker = new Worker(new URL('@/components/3d/Shaders/Sun/worker.tsx', import.meta.url), { type: 'module' })

export function Sun() {

    return (
        <>
            {!isSafari ? <Canvas worker={worker} /> : <ImageWrapper>
                <Image fill={true} src={sunSafariFallback} alt="sun image" />
            </ImageWrapper>}
        </>
    )
}

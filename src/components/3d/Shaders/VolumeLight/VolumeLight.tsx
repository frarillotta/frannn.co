'use client'

import dynamic from 'next/dynamic'
import { isSafari } from '@/detectBrowser'
import { ImageWrapper, Image } from '@/components/Image/Image'
import volumeLightSafariFallback from 'public/volumeLightSafariFallback.png';

const Canvas = dynamic(() => import('@/components/canvas/OffscreenCanvas').then((mod) => mod.Canvas), {
    ssr: false
})
const worker = new Worker(new URL('@/components/3d/Shaders/VolumeLight/worker.tsx', import.meta.url), { type: 'module' })

export function VolumeLight() {

    return (
        <>
            {!isSafari ? <Canvas worker={worker} /> : <ImageWrapper>
                <Image fill={true} src={volumeLightSafariFallback} alt="volume light image" />
            </ImageWrapper>}
        </>
    )
}

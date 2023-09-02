'use client'

import dynamic from 'next/dynamic'
import { isSafari } from '@/detectBrowser'
import { ImageWrapper, Image } from '@/components/Image/Image'
import fbmSafariFallback from 'public/fbmSafariFallback.png';

const Canvas = dynamic(() => import('@/components/canvas/OffscreenCanvas').then((mod) => mod.Canvas), {
    ssr: false
})
const worker = new Worker(new URL('@/components/3d/Shaders/FBM/worker.tsx', import.meta.url), { type: 'module' })

export function FBM() {

    return (
        <>
            {!isSafari ? <Canvas worker={worker} /> : <ImageWrapper>
                <Image fill={true} src={fbmSafariFallback} alt="fbm image" />
            </ImageWrapper>}
        </>
    )
}

'use client'

import dynamic from "next/dynamic"
import fragmentShader from '@/components/shaders/ditherTexture';
import { ShaderBase } from "@/components/3d/Shaders/ShaderBase";

const Canvas = dynamic(() => import('@/components/canvas/Canvas').then((mod) => mod.Canvas), {
    ssr: false
})

export default () => {
    return <Canvas>
            <ShaderBase fragmentShader={fragmentShader(false)} texture={'/anseladams.jpg'} />
        </Canvas>
}

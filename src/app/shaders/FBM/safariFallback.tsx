'use client'

import dynamic from "next/dynamic"
import fragmentShader from '@/components/shaders/fbm';
import { ShaderBase } from "@/components/3d/Shaders/ShaderBase";

const Canvas = dynamic(() => import('@/components/canvas/Canvas').then((mod) => mod.Canvas), {
    ssr: false
})

export default () => {
    return <Canvas>
            <ShaderBase fragmentShader={fragmentShader}/>
        </Canvas>
}

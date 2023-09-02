'use client'

import dynamic from "next/dynamic"
import { Particles } from "@/components/3d/Particles/Particles";

const Canvas = dynamic(() => import('@/components/canvas/Canvas').then((mod) => mod.Canvas), {
    ssr: false
})

export default () => {
    return <Canvas>
            <Particles />
        </Canvas>
}

'use client'

import { forwardRef, Suspense, useImperativeHandle, useRef } from 'react'
import { PerspectiveCamera } from '@react-three/drei'
import styled from 'styled-components'
import { Canvas as OffscreenCanvas } from '@react-three/offscreen'


export const Common = ({ color }: { color?: string }) => (
    <Suspense fallback={null}>
        {color && <color attach='background' args={[color]} />}
        <ambientLight intensity={0.5} />
        <pointLight position={[20, 30, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color='blue' />
        <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
    </Suspense>
)

const Canvas = forwardRef<unknown, { worker: Worker, className?: string }>(({ worker, className = '', ...props }, ref) => {
    const localRef = useRef<HTMLDivElement>(null)
    useImperativeHandle(ref, () => localRef.current)

    return (
        <>
            <div ref={localRef} {...props} />
            <OffscreenCanvas 
                className={className} 
                worker={worker} 
                dpr={1} 
                shadows 
                {...props} 
            />
        </>
    )
})

Canvas.displayName = 'Canvas'

export { Canvas }

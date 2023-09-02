'use client'

import { forwardRef, useImperativeHandle, useRef } from 'react'
import { Canvas as OffscreenCanvas } from '@react-three/offscreen'

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
                shadows="basic"
                {...props} 
            />
        </>
    )
})

Canvas.displayName = 'Canvas'

export { Canvas }

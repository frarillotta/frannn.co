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
                style={{ pointerEvents: 'none' }}
                className={className}
                worker={worker}
                dpr={Math.max(window.devicePixelRatio, 2)}
                shadows="basic"
                {...props}
            />
        </>
    )
})

Canvas.displayName = 'Canvas'

export { Canvas }

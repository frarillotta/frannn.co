'use client'

import { forwardRef, Suspense, useImperativeHandle, useRef } from 'react'
import { PerspectiveCamera } from '@react-three/drei'
import { Canvas as R3fCanvas } from '@react-three/fiber'


export const Common = ({ color }: { color?: string }) => (
    <Suspense fallback={null}>
        {color && <color attach='background' args={[color]} />}
        <ambientLight intensity={0.5} />
        <pointLight position={[20, 30, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color='blue' />
        <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
    </Suspense>
)

const Canvas = forwardRef<unknown, { children: React.ReactNode, className?: string }>(({ className = '', children, ...props }, ref) => {
    const localRef = useRef<HTMLDivElement>(null)
    useImperativeHandle(ref, () => localRef.current)

    return (
        <>
            <div ref={localRef} {...props} />
            <R3fCanvas
                style={{pointerEvents: 'none'}}
                className={className}
                dpr={Math.max(window.devicePixelRatio, 2)}
                shadows="basic"
                {...props}
            >{children}</R3fCanvas>
        </>
    )
})

Canvas.displayName = 'Canvas'

export { Canvas }

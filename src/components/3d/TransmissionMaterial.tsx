'use client'

import React, { useRef, useState } from 'react'
import { MeshTransmissionMaterial, useFBO, useGLTF } from '@react-three/drei'
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
const bottleMaterial = new THREE.MeshPhysicalMaterial({
    color: '#efefef',
    transmission: 2,
    roughness: 0.35,
    thickness: 10,
    envMapIntensity: 4,
    side: THREE.DoubleSide
})
const boxG = new THREE.BoxGeometry(5, 5, 5, 5);
export function Geometry() {
    const meshRef = useRef();
    //@ts-ignore
    const { nodes } = useGLTF('/geom.glb');
    useFrame(({clock}) => {
        meshRef.current.rotation.x = clock.elapsedTime
    })
    return (
        <mesh ref={meshRef} position={[0, 0, 0]} scale={[20, 60, 20]} rotation={[0, 0, Math.PI / 2]} geometry={nodes.XYZ_Function.geometry}  >
            <MeshTransmissionMaterial 
                // background={new THREE.Color('red')}
                // buffer={buffer.texture} 
                // thickness={0.1} 
                // anisotropy={0.2} 
                // chromaticAberration={0.01} 
                // ior={1.5} 
                // distortionScale={0.2} 
                // temporalDistortion={0.2} 
                samples={10}
                resolution={1024}
                transmission={1}
                roughness={0.0}
                thickness={0.4}
                ior={1.5}
                chromaticAberration={0.06}
                anisotropy={0.1}
                distortion={0.0}
                distortionScale={0.1}
                temporalDistortion={0.5}
                clearcoat={0}
                attenuationDistance={0.5}
                attenuationColor={"#ffffff"}
                color={"white"}
                side={THREE.FrontSide}
                // background={new THREE.Color("green")}
                
            />
        </mesh>
    )
}



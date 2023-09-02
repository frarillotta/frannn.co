import React from 'react'
import { render } from '@react-three/offscreen'
import { ShaderBase } from '../ShaderBase'
import fragmentShader from '@/components/shaders/raymarching';

render(<ShaderBase fragmentShader={fragmentShader} />)

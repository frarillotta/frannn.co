import React from 'react'
import { render } from '@react-three/offscreen'
import { ShaderBase } from '../ShaderBase'
import fragmentShader from '@/components/shaders/sun';

render(<ShaderBase fragmentShader={fragmentShader} />)

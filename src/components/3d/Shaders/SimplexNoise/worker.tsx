import React from 'react'
import { render } from '@react-three/offscreen'
import { ShaderBase } from '../ShaderBase'
import fragmentShader from '@/components/shaders/simplexNoise';

render(<ShaderBase fragmentShader={fragmentShader} />)

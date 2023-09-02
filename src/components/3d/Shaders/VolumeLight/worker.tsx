import React from 'react'
import { render } from '@react-three/offscreen'
import { ShaderBase } from '../ShaderBase'
import fragmentShader from '@/components/shaders/volumeLight';

render(<ShaderBase fragmentShader={fragmentShader} />)

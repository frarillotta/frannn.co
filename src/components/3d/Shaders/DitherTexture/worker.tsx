import React from 'react'
import { render } from '@react-three/offscreen'
import { ShaderBase } from '../ShaderBase'
import fragmentShader from '@/components/shaders/ditherTexture';

render(<ShaderBase fragmentShader={fragmentShader(true)} texture={'/anseladams.jpg'} />)

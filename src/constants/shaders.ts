import { fbm, raymarching, fullscreenFbm, simplexNoise, sun, dithertexture } from "../sketches/Glsl";

export const shaders = {
    fullscreenFbm: {
      fragmentShader: fullscreenFbm
    },
    raymarching: {
      fragmentShader: raymarching
    },
    fbm: {
      fragmentShader: fbm
    },
    ditherTexture: {
      fragmentShader: dithertexture,
      texture: "/anseladams.jpg"
    },
    simplexNoise: {
      fragmentShader: simplexNoise
    },
    sun: {
      fragmentShader: sun
    }
  };
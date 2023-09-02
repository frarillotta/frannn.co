import { isSafari } from '@/detectBrowser';
import dynamic from 'next/dynamic';

export const Component = isSafari ? dynamic(() => import('@/app/shaders/SimplexNoise/safariFallback').then((mod) => mod.default), {
    ssr: false
}) : dynamic(() => import('@/components/3d/Shaders/SimplexNoise/SimplexNoise').then((mod) => mod.SimplexNoise), {
    ssr: false
});

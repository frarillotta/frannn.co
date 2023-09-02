import { isSafari } from '@/detectBrowser';
import dynamic from 'next/dynamic';

export const Component = isSafari ? dynamic(() => import('@/app/shaders/Raymarching/safariFallback').then((mod) => mod.default), {
    ssr: false
}) : dynamic(() => import('@/components/3d/Shaders/Raymarching/Raymarching').then((mod) => mod.Raymarching), {
    ssr: false
});

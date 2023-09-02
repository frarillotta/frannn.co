import { isSafari } from '@/detectBrowser';
import dynamic from 'next/dynamic';

export const Component = isSafari ? dynamic(() => import('@/app/shaders/FBM/safariFallback').then((mod) => mod.default), {
    ssr: false
}) : dynamic(() => import('@/components/3d/Shaders/FBM/FBM').then((mod) => mod.FBM), {
    ssr: false
});

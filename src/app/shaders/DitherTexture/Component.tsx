import { isSafari } from '@/detectBrowser';
import dynamic from 'next/dynamic';

export const Component = isSafari ? dynamic(() => import('@/app/shaders/DitherTexture/safariFallback').then((mod) => mod.default), {
    ssr: false
}) : dynamic(() => import('@/components/3d/Shaders/DitherTexture/DitherTexture').then((mod) => mod.DitherTexture), {
    ssr: false
});

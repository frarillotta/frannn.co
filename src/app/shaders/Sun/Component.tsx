import { isSafari } from '@/detectBrowser';
import dynamic from 'next/dynamic';

export const Component = isSafari ? dynamic(() => import('@/app/shaders/Sun/safariFallback').then((mod) => mod.default), {
    ssr: false
}) : dynamic(() => import('@/components/3d/Shaders/Sun/Sun').then((mod) => mod.Sun), {
    ssr: false
});

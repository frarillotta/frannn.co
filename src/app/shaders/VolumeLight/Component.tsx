import { isSafari } from '@/detectBrowser';
import dynamic from 'next/dynamic';

export const Component = isSafari ? dynamic(() => import('@/app/shaders/VolumeLight/safariFallback').then((mod) => mod.default), {
    ssr: false
}) : dynamic(() => import('@/components/3d/Shaders/VolumeLight/VolumeLight').then((mod) => mod.VolumeLight), {
    ssr: false
});

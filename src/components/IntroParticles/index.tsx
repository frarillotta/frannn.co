'use client'

import dynamic from 'next/dynamic'
import { useCallback, useEffect } from 'react'
import { motion, useAnimate } from 'framer-motion'
import styled from 'styled-components'
import { isSafari } from '@/detectBrowser'

const Component = isSafari ? dynamic(() => import('@/components/IntroParticles/safariFallback').then((mod) => mod.default), {
    ssr: false
}): dynamic(() => import('@/components/IntroParticles/IntroParticles').then((mod) => mod.IntroParticles), {
    ssr: false
});
export function IntroParticles() {
    const [wrapperScope, animateShadow] = useAnimate();

    const animateIn = useCallback(() => {
        animateShadow(wrapperScope.current, {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        }, {
            ease: 'easeOut',
            duration: 1.5,
            delay: 2
        });

    }, [animateShadow, wrapperScope]);
    useEffect(() => {
        animateIn();
    }, [animateIn]);

    return (
        <Wrapper ref={wrapperScope} >
            <Component />
        </Wrapper>
    )
}

const Wrapper = styled(motion.div)`
    height: 100%;
    border: 2px solid black;
    clip-path: polygon(0% 0%, 1px 0%, 1px 100%, 0% 100%);
`

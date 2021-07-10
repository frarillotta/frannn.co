import {aboutPageContent} from "../constants";
import dynamic from "next/dynamic";
import {Header} from "../components/Header/Header";
import styled from "styled-components";
import { AnimationWrapper } from "../components/AnimationWrapper/AnimationWrapper";
import { useIsVisible, useIsMobile, useSafeToRemove } from "../hooks";
import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

//avoid SSR and do some code splitting!
const P5Renderer = dynamic(
  () => import("../components/p5/p5"),
  { ssr: false }
)

export default function About() {


    return (
        <AnimationWrapper>
            <PageWrapper>
                <Header variant={"black"}/>
                <Main>
                    {aboutPageContent.map((content, index) => 
                        <AboutEntry key={index} text={content.text} sketch={content.sketch} index={index}/>
                    )}
                </Main>
            </PageWrapper>
        </AnimationWrapper>
    )

}

const AboutEntry = ({text, sketch, index}) => {

    const {draw, setup, windowResized} = sketch;

    const el = useRef(null);
    const isVisible = useIsVisible(el, .75);
    const safeToRemove = useSafeToRemove(isVisible);

    useEffect(()=>{
        console.log(el, safeToRemove)
    }, [safeToRemove])

    return <AnimatePresence initial={false}>
        <Section 
            ref={el}
            style={index === 0 && {scrollSnapAlign: "none"}}
        >
            <P5El
                animate={{
                    opacity: isVisible ? .35 : 0
                }}
                transition={{ duration: 1.2}}
            >
                {!safeToRemove && <P5Renderer draw={draw} setup={setup} windowResized={windowResized}/>}
            </P5El>
            <Text>
                {text}
            </Text>
        </Section>
    </AnimatePresence>

}

const PageWrapper = styled.div`
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    perspective: 1px;
    scroll-snap-type: y proximity;
`

const Main = styled.main`
    position: relative;
`

const Section = styled(motion.section)`
    transform-style: preserve-3d;
    scroll-snap-align: center;
    display: flex;
    margin: auto;
    width: 80vw;
    height: 80vh;
`

const P5El = styled(motion.div)`
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 25%;
    left: 0;
    right: 0;
    bottom: 0;
    transform: translateZ(-1px) scale(1.9);
    filter: blur(3px);
    border-radius: 20%;
    opacity: .35;
    width: 100%;
    overflow: hidden;
`

const Text = styled.div`
    display: inline-block;
    margin: auto;
    width: auto;
    transform: translateZ(0);
    max-width: 800px;
    line-height: 1.5rem;
    padding: 2rem;
    font-weight: 700;
`
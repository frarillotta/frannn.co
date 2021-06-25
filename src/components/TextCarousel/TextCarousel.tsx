import { useEffect, useRef, useState } from "react";
import styled from 'styled-components';
import { motion, AnimatePresence } from "framer-motion";
import {TextCarouselProps} from "../../types";

const variants = {
    enter:  {
        y:  30,
        opacity: 0
    },
    center: {
        y: 0,
        opacity: 1
    },
    exit: {
        zIndex: 0,
        y: -30,
        opacity: 0
    }
};


const TextCarousel = ({terms, color}: TextCarouselProps) => {

    const [index, setIndex] = useState(0);

    const activeEl = useRef<HTMLDivElement>(null);
    const parentEl = useRef<HTMLElement>(null);

    useEffect(() => {
        const interval = setInterval(()=>{
            if (index === terms.length - 1) {
                setIndex(0);
            } else {
                setIndex(index+1);
            }
        }, 3500);

        return () => clearInterval(interval)
    });

    useEffect(()=>{

        if (activeEl.current) { 
            parentEl.current.style.width = `${activeEl.current.clientWidth}px`
        }
    }, [index]);

    return (
        <TermWrapper 
            ref={parentEl} 
            style={{ '--width': `${activeEl.current && activeEl.current.clientWidth}px`}} 
        >
            <AnimatePresence initial={false}>
                <Term
                    key={index}
                    style={{
                        "--color": color
                    }}
                    ref={activeEl}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    variants={variants}
                    transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.4 }
                }}>
                    {terms[index]}
                </Term>
            </AnimatePresence>
        </TermWrapper>
    )

}

const TermWrapper = styled.span`
    width: var(--width);
    position: relative;
    display: inline-block;
    width: 100px;
    height: 1rem;
    margin: 0 2px;
    transition: width .4s cubic-bezier(0.12, 0.59, 0.47, 0.93);
`

const Term = styled(motion.div)`
    color: var(--color);
    position: absolute;
    top: -2px;
    left: 0;
    white-space: nowrap;
    font-weight: 700;
`

export {TextCarousel}
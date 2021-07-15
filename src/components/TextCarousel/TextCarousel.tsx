import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
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
            if (index === terms.length - 1 && index != 0) {
                setIndex(0);
            } else {
                setIndex(index+1);
            }
        }, 3500);

        return () => clearInterval(interval)
    });

    useEffect(()=>{
        if (activeEl.current) { 
            parentEl.current.style.width = `${activeEl.current.offsetWidth}px`
        }
    }, [index]);

    return (
        <TermWrapper 
            ref={parentEl}
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
    position: relative;
    vertical-align: top;
    display: inline-block;
    @media (max-width: ${props => props.theme.phoneDown}) {
        height: 2rem;
    }
    margin: 0 2px;
    transition: width .4s cubic-bezier(0.12, 0.59, 0.47, 0.93);
`

const Term = styled(motion.div)`
    color: var(--color);
    position: absolute;
    left: 0;
    /* this sucks */
    min-width: 205px;
    @media (max-width: ${props => props.theme.phoneDown}) {
        min-width: 105px;
    }
    white-space: nowrap;
    font-weight: 700;
`

export {TextCarousel}
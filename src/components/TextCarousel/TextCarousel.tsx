import { useEffect, useRef, useState } from "react";
import styles from "./TextCarousel.module.css";
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
        <span 
            ref={parentEl} 
            style={{ width: `${activeEl.current && activeEl.current.clientWidth}px`}} 
            className={styles.termWrapper}
        >
            <AnimatePresence initial={false}>
                <motion.div
                    key={index}
                    style={{
                        color: color
                    }}
                    className={styles.term}
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
                </motion.div>
            </AnimatePresence>
        </span>
    )

}

export {TextCarousel}
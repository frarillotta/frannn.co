import { useEffect, useState } from 'react';


const useIsVisible: (el: {current: Element}, threshold?: number) => boolean = (el, threshold = 0.8) => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(()=>{
        if (!el.current) return
        const currentEl = el.current;
        const obs = new IntersectionObserver(([entry])=>{
            setIsVisible(entry.isIntersecting);
        }, {
            threshold: threshold
        });
        
        obs.observe(currentEl);

        return () => {
            obs.unobserve(currentEl);
        }

    }, [el.current]);

    return isVisible;

}

export { useIsVisible }
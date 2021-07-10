import { useEffect, useRef, useState } from "react";

const useSafeToRemove = (isVisible: boolean): boolean => {
    
    const timeout = useRef(null);
    const [safeToRemove, setSafeToRemove] = useState(true);
    useEffect(()=>{
        if (isVisible === false) {

            timeout.current = setTimeout(()=>{
                setSafeToRemove(true);
            }, 1200)

        } else {

            if (timeout.current) {
                clearTimeout(timeout.current);
            }
            setSafeToRemove(false);

        }

        return () => {

            if (timeout.current) clearTimeout(timeout.current);

        }

    }, [isVisible]);

    return safeToRemove;
}

export {useSafeToRemove}
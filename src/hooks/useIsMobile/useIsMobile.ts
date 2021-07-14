import { useState } from 'react';
import { useLayoutEffect } from 'react';


const useIsMobile = () => {

    const [isMobile, setIsMobile] = useState(false);

    useLayoutEffect(() => {

        if (window.innerWidth < 768) {

            setIsMobile(true);

        }

    }, [])

    return isMobile;

}

export { useIsMobile }
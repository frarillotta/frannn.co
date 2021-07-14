import { useEffect, useRef } from "react";
import Link from "next/link"
import {mouseOutInEventListener} from "../../utils";
import {AnchorProps} from "../../types";

const Anchor = ({href, children}: AnchorProps) => {

    const ref = useRef();

    useEffect(()=>{
        
        const el = ref.current;
        const eventsCleanup = mouseOutInEventListener(el);

        return eventsCleanup;

    }, [])

    return (
        <Link href={href}>
            <a ref={ref}>{children}</a>
        </Link>
    )

}

export {Anchor}
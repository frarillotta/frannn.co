import React, { useRef, useEffect } from "react";
import type {P5RendererProps} from ".././../types";
import p5 from "p5";
import styled from "styled-components";

const P5Renderer = ({
    sketch,
    autoResizeToWindow = true
}: P5RendererProps) => {

    if (!window) {
        throw false;
    }

    const wrapperElement = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = new p5(sketch, wrapperElement.current);

        if (autoResizeToWindow) {
            canvas.windowResized = () => {
                canvas.resizeCanvas(canvas.windowWidth, canvas.windowHeight);
            };
        }

        return () => canvas.remove();
    }, [sketch, autoResizeToWindow]);

    return (
        <>
            <WrapperEl ref={wrapperElement} />
        </>
    );
};

const WrapperEl = styled.div`
    width: 100%;
    height: 100%;
`
export default P5Renderer
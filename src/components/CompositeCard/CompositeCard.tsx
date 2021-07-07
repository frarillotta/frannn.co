import {CompositeCardProps} from "../../types";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { memo, useState, useMemo, useEffect, useRef, cloneElement } from "react";
import {mouseOutInEventListener} from "../../utils";
import { ExpandLessSVG } from "../SVG"
import { useIsVisible, useIsMobile } from "../../hooks";

let CompositeCard = ({
    children,
    subtitle, 
    location, 
    invert = false, 
    title, 
    date = "", 
    renderEl = null
}: CompositeCardProps) => {
    const alignText = invert ? "row" : "row-reverse";
    const itemsAlignment = invert ? "flex-start" : "flex-end";

    const el = useRef<Element>();

    const isMobile = useIsMobile();
    const threshold = useMemo(() => isMobile ? 0.3 : 0.5, [isMobile]);
    const isVisible = useIsVisible(el, threshold);

    const gridTemplate = useMemo(() => invert ? 
        `"header header"
        "content shader"
        "content shader";` 
        :
        `"header header"
        "shader content"
        "shader content";`,
    [invert]);

    return (
        <AnimatePresence initial={true}>
            <SectionWrapper
                ref={el}
                style={{
                    "--align-text": alignText
                }} 
                gridTemplate={gridTemplate}
                invert={invert}
                animate={{
                    opacity: isVisible ? 1 : 0,
                    translateX: isVisible ? 0 : 100,
                }}
                transition={{ duration: 1.0, ease: [0.04, 0.62, 0.23, 0.98] }}
            >
                <CompositeCardHeader>
                    <DetailsWrapper style={{
                        "--items-alignment": itemsAlignment
                    }}>
                        <Title>
                            {title}
                        </Title>
                        <Subtitle>
                            {subtitle}
                        </Subtitle>
                        <Location>
                            {location}
                        </Location>
                        <Date>
                            {date}
                        </Date>
                    </DetailsWrapper>
                </CompositeCardHeader>
                    <ContentText>
                        {children}
                    </ContentText>
                    <RenderElWrapper>
                        {isVisible && <RenderEl>
                            {renderEl}
                        </RenderEl>}
                    </RenderElWrapper>
            </SectionWrapper>
        </AnimatePresence>
    )
}

const CompositeCardHeader = ({children}) => {
    const ref = useRef();

    useEffect(()=>{
        const el = ref.current;
        const eventsCleanup = mouseOutInEventListener(el);

        return eventsCleanup;
    }, [])

    return <TitleWrapper 
        ref={ref}
    >
        {children}
    </TitleWrapper>
}

CompositeCard = memo(CompositeCard);

const SectionWrapper = styled(motion.section)`
    width: 100%;
    padding: 1rem;
    gap: 1rem;
    display: grid;
    grid-template-rows: 150px 0fr 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: ${props => props.gridTemplate};
    @media (max-width: ${props => props.theme.tabletDown}) {
        grid-template-areas: 
        "header header"
        "content content"
        "shader shader";
    };
`

const DetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: var(--items-alignment);
    gap: 1rem;
`

const TitleWrapper = styled.header`
    padding: 1rem 1.5rem;
    justify-content: space-between;
    display: flex;
    font-size: 1rem;
    border-radius: 30px 30px 10px 10px;
    width: 100%;
    flex-direction: var(--align-text);
    background-color: #F5DF4D;
    align-items: center;
    grid-area: header;
`

const Title = styled.h1`
    font-weight: 700;
    font-size: 1.5rem;
`

const Subtitle = styled.h2`
    font-style: italic;
`

const Location = styled.h2`
    font-style: italic;
    color: hsl(0deg 0% 43%);
`

const Date = styled.h2`
    font-size: 0.9rem;
    color: hsl(0deg 0% 43%);
`

const ContentText = styled.article`
    font-family: 'Merriweather', serif;
    font-size: 1rem;
    align-self: end;
    text-rendering: optimizeLegibility;
    @media (max-width: ${props => props.theme.tabletDown}) { 
        align-self: center;
    }
    line-height: 1.5rem;
    padding: 0 1rem;
    grid-area: content;
`

const RenderElWrapper = styled.aside`
    grid-area: shader;
    padding-top: 100%;
    position: relative;
    width: 100%;
    @media (min-width: ${props => props.theme.tabletDown}) { 
        grid-row: 1 / 4;
    }

`

const RenderEl = styled.div`
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 30px;
    -webkit-mask-image: -webkit-radial-gradient(white, black);
`

export { CompositeCard }
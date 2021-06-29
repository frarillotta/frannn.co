import {CompositeCardProps} from "../../types";
import styled, {css} from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { memo, useEffect } from "react";

let CompositeCard = ({
    children, 
    subtitle, 
    location, 
    invert = false, 
    title, 
    date = "", 
    renderEl = null,
    expanded,
    setExpanded,
    index
}: CompositeCardProps) => {
    const isOpen = expanded;
    const alignText = invert ? "flex-start" : "flex-end";
    const handleClick = () => {
        if(isOpen) {
            setExpanded(-1)
        } else {
            setExpanded(index)
        }
    }
    
    return (
        <SectionWrapper
            style={{
                "--align-text": alignText,
            }} 
            invert={invert}
        >
            <TitleWrapper 
                initial={false}
                animate={{ backgroundColor: isOpen ? "#FF0088" : "#F5DF4D" }}
                onClick={() => handleClick()}
            >
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
            </TitleWrapper>
            <AnimatePresence initial={false}>
                {isOpen && <>
                    <ContentText
                            key="content"
                            initial="collapsed"
                            animate="open"
                            exit="collapsed"
                            variants={{
                                open: { opacity: 1, height: "auto" },
                                collapsed: { opacity: 0, height: 0 }
                            }}
                            transition={{ duration: 1.0, ease: [0.04, 0.62, 0.23, 0.98] }}
                        >
                        {children}
                    </ContentText>
                    <RenderElWrapper
                        key="render"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 }
                        }}
                        transition={{ duration: 1.0, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                        <RenderEl>
                            {renderEl}
                        </RenderEl>
                    </RenderElWrapper>
                </>}
            </AnimatePresence>
        </SectionWrapper>
    )
}
CompositeCard = memo(CompositeCard);

const SectionWrapper = styled.section`
    width: 100%;
    padding: 2rem;
    gap: 1rem;
    display: grid;
    grid-template-rows: 150px 0fr 1fr;
    grid-template-columns: 1fr 1fr;

    grid-template-areas: 
        "header header"
        "shader content"
        "shader content";
    ${(props) => props.invert && css`{
        grid-template-areas: 
        "header header "
        "content shader"
        "content shader";
    }`}
    @media (max-width: ${props => props.theme.tabletDown}) {
        grid-template-areas: 
        "header header"
        "content content"
        "shader shader";
    }
    content: ${(props) => props.invert}

`

const TitleWrapper = styled(motion.header)`
    padding: 1rem 1.5rem;
    display: flex;
    font-size: 1rem;
    border-radius: 30px 30px 4px 10px;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    justify-content: space-between;
    align-items: var(--align-text);
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

const ContentText = styled(motion.article)`
    align-self: end;
    @media (max-width: ${props => props.theme.tabletDown}) { 
        align-self: center;
    }
    line-height: 1.5rem;
    padding: 0 1rem;
    grid-area: content;
`

const RenderElWrapper = styled(motion.aside)`
    grid-area: shader;
    @media (min-width: ${props => props.theme.tabletDown}) { 
        grid-row: 1 / 4;
    }

`

const RenderEl = styled.div`
    margin: auto;
    border-radius: 30px;
    -webkit-mask-image: -webkit-radial-gradient(white, black);
`

export { CompositeCard }
import {Header} from "../components/Header/Header";
import {CompositeCard} from "../components/CompositeCard/CompositeCard";
import {roles} from "../constants";
import { AnimationWrapper } from "../components/AnimationWrapper/AnimationWrapper";
import styled from "styled-components";
import { useState } from "react";

export default function Work() {

    const [expanded, setExpanded] = useState<number>(-1)

    return (
        <AnimationWrapper>
            <Header variant={"black"}/>
            <Main>
                {roles.map((role, index)=>{
                    return <CompositeCard 
                        expanded={expanded === index}
                        setExpanded={setExpanded}
                        key={role.title}
                        index={index}
                        invert={index % 2 === 0}
                        title={role.company}
                        location={role.location}
                        subtitle={role.title}
                        date={role.date}
                        renderEl={role.shader}
                    >
                        {role.children}
                    </CompositeCard>
                })}
            </Main>
        </AnimationWrapper>
    )

}

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    gap: 4rem;
    max-width: 80vw;

@media (max-width: ${props => props.theme.phoneDown}) {

    & {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: auto;
        gap: 2rem;
        max-width: none;
    }

}`

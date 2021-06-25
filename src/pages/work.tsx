import {Header} from "../components/Header/Header";
import {CompositeCard} from "../components/CompositeCard/CompositeCard";
import {roles} from "../constants";
import { AnimationWrapper } from "../components/AnimationWrapper/AnimationWrapper";
import {styled} from 'styled-components';

export default function Work() {

    return (
        <AnimationWrapper>
            <Header variant={"black"}/>
            <Main>
                {roles.map((role, index)=>{
                    return <CompositeCard 
                        key={role.title}
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
    gap: 6rem;
    max-width: 80vw;

@media (max-width: 500px) {

    & {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: auto;
        gap: 6rem;
        max-width: none;
    }

}`

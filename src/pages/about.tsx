import {aboutPageContent} from "../constants";
import dynamic from "next/dynamic";
import {Header} from "../components/Header/Header";
import styled from "styled-components";
import { AnimationWrapper } from "../components/AnimationWrapper/AnimationWrapper";

//avoid SSR and do some code splitting!
const P5Renderer = dynamic(
  () => import("../components/p5/p5"),
  { ssr: false }
)

export default function About() {

    const {draw, setup, windowResized} = aboutPageContent.sketch;

    return (
        <AnimationWrapper>
            <Header variant={"black"}></Header>
            <Main>
                <Section>
                    <P5El>
                        <P5Renderer draw={draw} setup={setup} windowResized={windowResized}/>
                    </P5El>
                    <Text>
                        {aboutPageContent.text}
                    </Text>
                </Section>
            </Main>
        </AnimationWrapper>
    )

}

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Section = styled.section`
    position: relative;
    display: flex;
    width: 80vw;
    height: 520px;
`

const P5El = styled.div`
    position: absolute;
    top: 0;
    filter: blur(3px);
    border-radius: 20%;
    opacity: .35;
    width: 80vw;
    overflow: hidden;
`

const Text = styled.div`
    display: inline-block;
    margin: auto;
    width: auto;
    position: relative;
    max-width: 800px;
    line-height: 1.5rem;
    padding: 2rem;
    font-weight: 700;
`
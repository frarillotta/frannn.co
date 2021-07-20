import styled from "styled-components";
import { useEffect, useState } from "react";
import {Shader} from "../components/Shader/Shader"
import { homepageText, shader } from "../constants"
import {Header} from "../components/Header/Header"
import { AnimatePresence, motion } from "framer-motion";
import { AnimationWrapper } from "../components/AnimationWrapper/AnimationWrapper";

export default function Home() {

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(()=>{
    setIsLoaded(true)
  }, [])

  return (
    <Container>
      <Header variant={"white"}/>
      <Background>
          <Shader shader={shader}/>
      </Background>
      <Main>
        <AnimatePresence initial={false}>
          <Article
            animate={{
              translateX: isLoaded ? 0 : 100
            }}
            transition={{ duration: 1.2, ease: [.22,.85,.41,1.03]}}
          >
            {homepageText}
          </Article>
        </AnimatePresence>
      </Main>
    </Container>
  )
}

const Container = styled(AnimationWrapper)`
  height: 80vh;
  background: black;
`

const Background = styled.div`
  bottom: 0px;
  position: absolute;
  height: 50vh;
  width: 100%;
`
const Main = styled.main`
  display: flex;
  position: relative;
  margin: auto;
  overflow: hidden;
  margin-top: max(15%, 3rem);
  width: 75%;
  @media (max-width: ${props => props.theme.phoneDown}) {
    margin: 0px;
    width: 100%;
  }
  align-self: center;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

const Article = styled(motion.article)`
  padding: 2rem;
  color: white;
  line-height: 4rem;
  display: inline-block;
  font-size: 2rem;
  transform: translateX(100px);
  @media (max-width: ${props => props.theme.phoneDown}) {
    line-height: 2rem;
    font-size: 1rem;
  }
`
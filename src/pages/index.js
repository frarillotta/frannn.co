import styled from "styled-components";
import {Shader} from "../components/Shader/Shader"
import {shaders, homepageText} from "../constants"
import {Header} from "../components/Header/Header"
import { AnimationWrapper } from "../components/AnimationWrapper/AnimationWrapper";

export default function Home() {

  return (
    <Container>
      <Header variant={"white"}/>
      <Background>
          <Shader shader={shaders.fbm}/>
      </Background>
      <Main>
        <Article>
           {homepageText}
        </Article>
      </Main>
    </Container>
  )
}

const Container = styled(AnimationWrapper)`
  height: 100vh;
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
  margin-top: max(15%, 3rem);
  width: 100%;
  align-self: center;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

const Article = styled.article`
  padding: 2rem;
  color: white;
  line-height: 1.5rem;
  font-size: 1rem;
`
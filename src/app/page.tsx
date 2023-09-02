'use client'

import dynamic from 'next/dynamic'
import styled from 'styled-components'
import { SVGText } from '@/components/SVGText/SVGText'
import { Card } from '@/components/Card/Card'
import { OutLink } from '@/components/OutLink/OutLink'
import { Image, ImageWrapper } from '@/components/Image/Image';
import outlineShaderIcon from 'public/outline-shader-icon.png';
import flockingIcon from 'public/flocking-icon.png';
import crosswordsIcon from 'public/crosswords-icon.png';
import galaticasmirogiornoIcon from 'public/galaticasmirogiorno-icon.png';
import particleShadowIcon from 'public/particle-shadow-icon.png';
import strangeAttractorsIcon from 'public/strange-attractors-icon.png';

import NextLink from 'next/link';
import React from 'react'
import { Variants, motion } from 'framer-motion'

const Raymarching = dynamic(() => import('@/components/3d/Shaders/Raymarching/Raymarching').then((mod) => mod.Raymarching), {
  ssr: false
})

const SimplexNoise = dynamic(() => import('@/components/3d/Shaders/SimplexNoise/SimplexNoise').then((mod) => mod.SimplexNoise), {
  ssr: false
})
const DitherTexture = dynamic(() => import('@/components/3d/Shaders/DitherTexture/DitherTexture').then((mod) => mod.DitherTexture), {
  ssr: false
})
const VolumeLight = dynamic(() => import('@/components/3d/Shaders/VolumeLight/VolumeLight').then((mod) => mod.VolumeLight), {
  ssr: false
})
const FBM = dynamic(() => import('@/components/3d/Shaders/FBM/FBM').then((mod) => mod.FBM), {
  ssr: false
})
const Sun = dynamic(() => import('@/components/3d/Shaders/Sun/Sun').then((mod) => mod.Sun), {
  ssr: false
})
const IntroParticles = dynamic(() => import('@/components/IntroParticles').then((mod) => mod.IntroParticles), {
  ssr: false
})

export default function Page() {
  return (
    <>
      <Main>
        <IntroScreen>
          <TitlesWrapper>
            <SVGText>Francesco Arillotta</SVGText>
            <SVGTextWithCorrection x={43} textAnchor="start">Frontend Developer</SVGTextWithCorrection>
          </TitlesWrapper>
          <IntroParticles />
          {/* <Description>Frontend Developer with a passion for 3d, motion design and maths.</Description> */}
        </IntroScreen>
        <MoreScreen >
          <ProjectsWrapper>
            <Title>Selected Projects</Title>
            <Card>
              <Card.PresentationImage>
                <ImageWrapper>
                  <Image fill={true} src={flockingIcon} alt="flocking icon" />
                </ImageWrapper>
              </Card.PresentationImage>
              <Card.Title>  <OutLink href="https://flocking-r3f.vercel.app/"> Flocking </OutLink>  </Card.Title>
              <Card.AdditionalSubtitle>react-three-fiber, postprocessing, Blender</Card.AdditionalSubtitle>
              <Card.Description>
                Implementation of Craig Reynold&lsquo;s boids model, plus some additional forces (such as object avoidance, following the player, ground avoidance, boundary). Also featuring postprocessing.
              </Card.Description>
            </Card>
            <Card>
              <Card.PresentationImage>
                <ImageWrapper>
                  <Image fill={true} src={galaticasmirogiornoIcon} alt="galaticasmirogiorno icon" />
                </ImageWrapper>
              </Card.PresentationImage>
              <Card.Title>  <OutLink href="https://www.galaticasmirogiorno.com/projects"> GALATICASMIROGIORNO </OutLink>  </Card.Title>
              <Card.AdditionalSubtitle>Next.js, framer-motion, SVG</Card.AdditionalSubtitle>
              <Card.Description>
                Minimalist website to showcase my friend&lsquo;s projects for their upcoming studio.
              </Card.Description>
            </Card>
            <Card>
              <Card.PresentationImage>
                <ImageWrapper>
                  <Image fill={true} src={strangeAttractorsIcon} alt="strange attractors icon" />
                </ImageWrapper>
              </Card.PresentationImage>
              <Card.Title>  <OutLink href="https://strange-attractors-r3f.vercel.app/"> Strange Attractors </OutLink>  </Card.Title>
              <Card.AdditionalSubtitle>react-three-fiber, webGL, GPGPU</Card.AdditionalSubtitle>
              <Card.Description>
                GPGPU implementation of strange attractors I found around the internet.
              </Card.Description>
            </Card>
            <Card>
              <Card.PresentationImage>
                <ImageWrapper>
                  <Image fill={true} src={particleShadowIcon} alt="particle shadow icon" />
                </ImageWrapper>
              </Card.PresentationImage>
              <Card.Title> <OutLink href="https://r3f-particle-shadows.vercel.app/"> Particle Shadows </OutLink> </Card.Title>
              <Card.AdditionalSubtitle>react-three-fiber, webGL</Card.AdditionalSubtitle>
              <Card.Description>
                I was told it&lsquo;s impossible to get particles to cast and receive shadows. So obviously I had to try it. Also featuring cool shapes. <br /><u>N.B. This may not work on all GPUs due to driver limitations. Also doesn't work on safari cause safari sucks.</u>
              </Card.Description>
            </Card>
            <Card>
              <Card.PresentationImage>
                <ImageWrapper>
                  <Image fill={true} src={outlineShaderIcon} alt="outline shader icon" />
                </ImageWrapper>
              </Card.PresentationImage>
              <Card.Title> <OutLink href="https://r3f-outline-shader.vercel.app/"> Outline Shader </OutLink> </Card.Title>
              <Card.AdditionalSubtitle>react-three-fiber, postprocessing, webGL, Blender</Card.AdditionalSubtitle>
              <Card.Description>
                Postprocessing shader concept for a game I&lsquo;m working on.
              </Card.Description>
            </Card>
            <Card>
              <Card.PresentationImage>
                <ImageWrapper>
                  <Image fill={true} src={crosswordsIcon} alt="crosswords icon" />
                </ImageWrapper>
              </Card.PresentationImage>
              <Card.Title> <OutLink href="https://react-crosswords-app.vercel.app/">React Crosswords </OutLink> </Card.Title>
              <Card.AdditionalSubtitle>React</Card.AdditionalSubtitle>
              <Card.Description>
                Do you, like me, love crosswords? And are you, like me, appalingly bad at them? Worry not, I have the app just for you. This was one of the very first react projects I took on and learned a lot working on it.
              </Card.Description>
            </Card>
          </ProjectsWrapper>
          <ExperienceWrapper>
            <Title>Experience</Title>
            <Card>
              <Card.PresentationImage>
                <ShaderLink href={"/shaders/VolumeLight"}>
                  <VolumeLight />
                </ShaderLink>
              </Card.PresentationImage>
              <Card.Title> Web Engineer </Card.Title>
              <Card.Subtitle>Trainline</Card.Subtitle>
              <Card.AdditionalTitle>London</Card.AdditionalTitle>
              <Card.AdditionalSubtitle>November 2021 - Present</Card.AdditionalSubtitle>
              <Card.Description>
                Web platform team, serving over 300 engineers. Focused on replatforming our massive booking flow monorepo from a monolithic BFF-driven architecture to graphQL & relay. Spent plenty of time working on championing quality and testing, rewriting our best practices and working with QA leads on educating other developers on our testing strategy.
              </Card.Description>
            </Card>
            <Card>
              <Card.PresentationImage>
                <ShaderLink href={"/shaders/Raymarching"}>
                  <Raymarching />
                </ShaderLink>
              </Card.PresentationImage>
              <Card.Title> Frontend Web Developer </Card.Title>
              <Card.Subtitle>Yoox Net-a-Porter</Card.Subtitle>
              <Card.AdditionalTitle>Bologna, Italy</Card.AdditionalTitle>
              <Card.AdditionalSubtitle>May 2021 - November 2021</Card.AdditionalSubtitle>
              <Card.Description>
                Web platform team for yoox, leading their frontend migration from ASP.NET to React. Also focused on improvements of web vitals, SSR speed, infra stability and developer productivity with tooling and CI/CD improvements.
              </Card.Description>
            </Card>
            <Card>
              <Card.PresentationImage>
                <ShaderLink href={"/shaders/FBM"}>
                  <FBM />
                </ShaderLink>
              </Card.PresentationImage>
              <Card.Title>Software Engineer</Card.Title>
              <Card.Subtitle>Sovrn</Card.Subtitle>
              <Card.AdditionalTitle>London</Card.AdditionalTitle>
              <Card.AdditionalSubtitle>July 2020 - April 2021</Card.AdditionalSubtitle>
              <Card.Description>
                Fullstack role on our tech product, with a specific focus on reliability, stability and performance. Rearchitected our real-time data backend (1.5bn requests per day) as well as our fullstack frontend using a CQRS architecture.
              </Card.Description>
            </Card>
            <Card>
              <Card.PresentationImage>
                <ShaderLink href={"/shaders/Sun"}>
                  <Sun />
                </ShaderLink>
              </Card.PresentationImage>
              <Card.Title>Implementation Engineer II</Card.Title>
              <Card.Subtitle>Sovrn</Card.Subtitle>
              <Card.AdditionalTitle>London</Card.AdditionalTitle>
              <Card.AdditionalSubtitle>January 2020 - July 2020</Card.AdditionalSubtitle>
              <Card.Description>
                Implementation Engineer for the market development team, focused on product strategy, technical implementation and partnerships. Used lean development with quick iteration cycles to test assumptions from our product team in order to improve our tech offering.
              </Card.Description>
            </Card>
            <Card>
              <Card.PresentationImage>
                <ShaderLink href={"/shaders/SimplexNoise"}>
                  <SimplexNoise />
                </ShaderLink>
              </Card.PresentationImage>
              <Card.Title>Solutions Engineer</Card.Title>
              <Card.Subtitle>Sovrn</Card.Subtitle>
              <Card.AdditionalTitle>London</Card.AdditionalTitle>
              <Card.AdditionalSubtitle>June 2019 - January 2020</Card.AdditionalSubtitle>
              <Card.Description>
                First solutions engineer for the //Signal product line, which allowed me to build all our processes, documentation and tools from the ground up. Worked with top global publishers on pre-sales and post-sales technical support, ensuring implementation experience was smooth, issues were caught proactively via data analysis and troubleshooting SLAs were respected.
              </Card.Description>
            </Card>
            <Card>
              <Card.PresentationImage>
                <ShaderLink href={"/shaders/DitherTexture"}>
                  <DitherTexture />
                </ShaderLink>
              </Card.PresentationImage>
              <Card.Title>Operations Specialist</Card.Title>
              <Card.Subtitle>Sovrn</Card.Subtitle>
              <Card.AdditionalTitle>London</Card.AdditionalTitle>
              <Card.AdditionalSubtitle>August 2018 - May 2019</Card.AdditionalSubtitle>
              <Card.Description>
                Worked on enabling Sovrn&lsquo;s publisher to use our platform effectively through proactive and reactive data analysis, technical troubleshooting and supporting our sales team. The start of a love story with quality products and the free internet.
              </Card.Description>
            </Card>
          </ExperienceWrapper>
        </MoreScreen>
      </Main>
    </>
  )
}

const MotionLink = motion(NextLink)
const ShaderLink: React.FC<{ children: React.ReactNode, href: string }> = ({ children, href }) => {
  const variants: Variants = {
    whileHover: {
      scaleY: 1,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  }

  return <StyledLink
    href={href}
    whileHover="whileHover"
  >
    {children}
    <ShaderLinkOverlay initial={{ scaleY: 0, transformOrigin: '0 0' }} variants={variants}></ShaderLinkOverlay>
  </StyledLink>

}

const StyledLink = styled(MotionLink)`

  position: relative;
  width: 100%;
  height: 100%;
  display: block;

`

const ShaderLinkOverlay = styled(motion.div)`
  position: absolute;
  inset: 0;
  mix-blend-mode: difference;
  background: white;
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 40px;
`

const SVGTextWithCorrection = styled(SVGText)`
transform: none;
@media (max-width: 390px) {
    transform: translateX(-36px);
  }
`

const ScreenWrapper = styled.article`
  padding: 16px 8px;
  height: auto;
  width: 100%;
  flex-direction: row;
  min-height: 100vh;
`

const IntroScreen = styled(ScreenWrapper)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const MoreScreen = styled(ScreenWrapper)`
  display: flex;
  flex-direction: row;
  gap: 16px;
  flex-wrap: wrap;
`;

const TitlesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const DetailsWrapper = styled.div`
  width: 100%;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  position: relative;
  
  flex: 1 1;
  // gap: 16px;
`;

const ProjectsWrapper = styled(DetailsWrapper)`

`;
const ExperienceWrapper = styled(DetailsWrapper)`

`;

const Title = styled.p`
  font-size: 1.5em;
  background: white;
  position: absolute;
  top: 0;
  right: 0;
  padding: 4px 8px;
  transform: translateY(-50%) translateX(5%);
  border-radius: 30px;
`

import type { Roles } from "../types";
import { Shader } from "../components/Shader/Shader";
import { Anchor } from "../components/Anchor/Anchor";
import { raymarching, fullscreenFbm, simplexNoise, sun, dithertexture } from "../sketches/Glsl";

export const roles: Roles[] = [
    {
      company: "Yoox Net-a-Porter",
      title: "Frontend Developer",
      location: "Bologna, Italy",
      date: "May 2021 - Present",
      children: <>
        <p>
        <Anchor style={{fontWeight: "bold"}} href="https://www.ynap.com/">Yoox Net-a-Porter group</Anchor> is one of the leading online luxury and fashion retailers in the world.
        </p>
        <br/> 
        <p> 
          My role at YNAP is focused on the frontend development of <Anchor style={{fontWeight: "bold"}} href="https://www.yoox.com/">yoox.com</Anchor> for the Cross team. My team is responsible for aligning the global frontend engineering department and ensuring that quality, pratices and standards are consistent across the whole organization.
        </p>
        <p> 
          Despite having been there for a very short period of time, I have been writing production-ready code from week 1. My current effort is focused on migrating from our legacy .Net codebase to a modern React/Redux microservices infrastructure, improving our developer experience and maintainability of our codebases, improving our app's performance, both in backend and frontend, as well as improving our web vitals.
        </p>
      </>,
      shader: <Shader shader={raymarching}/>,
      shaderLink: raymarching.shaderLink
    }, {
      company: "Sovrn",
      title: "Full-stack Software Engineer",
      location: "London, United Kingdom",
      date: "July 2020 - April 2021",
      children: <>
        <p>
          As a Full-stack Software Engineer for the <Anchor style={{fontWeight: "bold"}} href="https://www.sovrn.com/publishers/signal/">//Signal</Anchor> team, my mission was to make some of the highest quality software in the adtech ecosystem, focused on speed, quality, reliability and maintainability.
        </p>
        <p>
          Our stack was a typical modern Javascript stack: Typescript for static types, Jest and Cypress to test our entire codebase (with a minimum coverage of 95%); React, Redux, Webpack and Material-UI for our UIs; Node.js, AWS (EKS, S3, CloudFront), Datadog, Kubernetes, and CQRS architecture for our backend.
        </p>
        <br/>  
        <p>
          Using my in-depth knowledge and experience of the adtech domain, I quickly became the SME for matters such as Google Ad Manager and Prebid for the whole UK engineering team.
        </p>
        <p> 
          Aside from day-to-day development, my work was focused on the full stack of our tech: from client-side code to our backend. On the client-side front I focused on our engagement data collection, which handles more than 1.5 billion request each day globally. I improved the quality of those metrics by using modern APIs and running constant experiments, which resulted in the accuracy getting closer to the leading adtech platforms (namely, Google, Facebook, The Trade Desk, etc.).
          On the React+Redux front I took many initiatives to improve the performance of our UIs, while on the backend side, I took part in the re-work of our whole infrastructure, helping with design and architecture.
        </p>
      </>,
      shader: <Shader shader={fullscreenFbm}/>,
      shaderLink: fullscreenFbm.shaderLink
    }, {
      company: "Sovrn",
      title: "Implementation Engineer II",
      location: "London, United Kingdom",
      date: "January 2020 - June 2020",
      children: <>
        <p>
          As Implementation Engineer II for the Market development team, I got to be spearheading the most exciting branch of Sovrn, focused on our long term product strategy. 
        </p> 
        <p> 
          Under the leadership of our founder, I got to work on many exciting projects, using quick iteration cycles with extremely fast feedback loops, hacking the concept of agile development. My role was to reduce asymmetric information between where we wanted our product to go and what the industry response would be, by developing MVPs and POCs and evaluating the results with a data-driven approach.
        </p>
        <p> 
          This was definitely my most formative role yet: I got to work on entire product lines from conception and market research, all the way through architecting the solution (usually full stack), building it and implementing it, and wrapping up with, together with our marketing team, building a go-to-market strategy and long-term plan for the product.
        </p>
        <p>
          There are many interesting projects I got to work on: a monetization tool for adblock users that respects their privacy and their browsing experience, a collaborative filtering-based with K-nearest neighbour content recommendation tool based on first party user engagement data, a machine-learning-based yield optimization tool, many improvements to our existing revenue-generating products, 3rd party data integrations with global top publishers (including CNN, Reach and Future).
        </p>
      </>,    
      shader: <Shader shader={sun}/>,
      shaderLink: sun.shaderLink
    }, {
      company: "Sovrn",
      title: "Solutions Engineer",
      location: "London, United Kingdom",
      date: "May 2019 - December 2019",
      children: <>
        <p>
          As a Solutions engineer I focused all of my energies into supporting the technical needs of our top global publishers, through creative customized solutions and assisting our sales team with pre-sales consulting, as well as advocating for them to the broader product and engineering organization.
        </p>
        <br/>
        <p> 
          I was the very first Solutions engineer globally on the <Anchor style={{fontWeight: "bold"}} href="https://www.sovrn.com/publishers/signal/">//Signal</Anchor> product line, which gave me the chance to build all of our technical solutions processes, data etiquette, documentation and tools from the ground up.
        </p>
        <p> 
          During this time I worked with many <Anchor style={{fontWeight: "bold"}} href="https://www.comscore.com/Insights/Rankings">Comscore 50</Anchor> publishers; with their feedback I got to improve our product through independent initiatives to enhance customer experience, revenue and performance.
        </p>
      </>,     
      shader: <Shader shader={dithertexture}/>,
      shaderLink: dithertexture.shaderLink
    }, {
      company: "Sovrn",
      title: "Operations Specialist",
      location: "London, United Kingdom",
      date: "August 2018 - May 2019",
      children: <>
        <p>
         <Anchor style={{fontWeight: "bold"}} href="https://www.sovrn.com/">Sovrn</Anchor> is one of the leading supply side adtech companies, handling more than 40 billion ad requests per day. Their mission is to allow online media publishers to be truly independent. Their technology is designed to reward good content with high levels of user engagement and brand safety.
        </p>
        <br/>
        <p>
          While I had some work experience before this, Sovrn was the very first tech job I had straight out of university, where I got a degree in economics.
        </p> 
        <p> 
          I started at Sovrn shortly after they acquired the <Anchor style={{fontWeight: "bold"}} href="https://www.sovrn.com/publishers/signal/">//Signal</Anchor> technology (FKA OnScroll), which is what I've always focused on in the UK office. It allowed me to experience first-hand the transition from an indepedent idea to a puzzle piece in a much broader picture.
        </p>
        <p>
          This is where I got started in media and adtech, learning the ins and outs of demand and supply side of the industry. 
          During my time in this role I focused on assisting online publishers in monetizing their traffic; I embodied Sovrn's mission and made it my mission.
        </p>
        <p>
          I built my technical expertise in the product, which is what eventually led to my next role, but also got to improve the team's internal processes by automating part of our workflow and helped our product team train the global support teams.
        </p>
      </>, 
      shader: <Shader shader={simplexNoise}/>,
      shaderLink: simplexNoise.shaderLink
    }
  ];
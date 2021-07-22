import { sea } from "../sketches/p5";
import { starfield } from "../sketches/p5/starfield";
import { disruption } from "../sketches/p5/disruption";
import { Anchor } from "../components/Anchor/Anchor";
 
export const aboutPageContent: {text: JSX.Element; sketch: (p5) => void}[] = [
  {
    text: <>
      <p>
        I am on an eternal quest to become a better developer, designer, artist, teacher and product leader.
      </p>
      <p>
        I consider myself an end-to-end owner, with a strong dedication to push the boundaries of what I can do in any given domain. I thrive in environments that empower and cherish creativity, ingenuity and boldness. 
      </p>
      <br/>
      <p>
        I am currently a frontend developer at Yoox Net-a-Porter Group for <Anchor style={{fontWeight: "bold"}} href="https://www.yoox.com/">yoox.com</Anchor>, focused on improving the user experience for millions of customers all across the globe.  
      </p>
      <p>
        Regardless of my title, what I enjoy doing is finding creative solutions to complex problems, be it with code, design, product leadership or operations.
      </p>
    </>,
    sketch: starfield
  },
  {
    text: <>
      <p>
        I built this as a playground to experiment with engineering and design concepts that tickle my interest <span style={{fontSize: "0.5rem"}}>(and as a response to horrfying PDF resumes.)</span>
      </p>
      <br/>
      <p>
        This website was built with technologies that I love using: Typescript, GLSL, P5js, Framer Motion, THREE.js, React, Next.js and styled-components.
      </p> 
    </>,
    sketch: sea
  },
  {
    text: <> 
      <p>
        If you want to get in touch do feel free to drop me an <Anchor style={{fontWeight: "bold", color:"#BB001B"}} href="mailto:frarillotta@gmail.com">email</Anchor>, hit me up on <Anchor style={{fontWeight: "bold", color: "#1DA1F2"}} href="https://twitter.com/molemanfran">Twitter</Anchor> or  <Anchor style={{fontWeight: "bold", backgroundImage: "linear-gradient(90deg, rgba(254,218,117,1) 0%, rgba(250,126,30,1) 12%, rgba(214,41,118,1) 38%, rgba(150,47,191,1) 62%, rgba(79,91,213,1) 91%)", color: "transparent", WebkitBackgroundClip: "text"}} href="https://www.instagram.com/molemanfran">Instagram</Anchor>.
      </p>
      <br/>
      <p>
        You can check out the source for this site <Anchor style={{textDecoration: "underline"}} href="https://github.com/frarillotta/frannn.co">here</Anchor>
      </p> 
    </>,
    sketch: disruption
  }
]
  
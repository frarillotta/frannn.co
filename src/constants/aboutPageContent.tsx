import { sea } from "../sketches/p5";
import { starfield } from "../sketches/p5/starfield";
import { disruption } from "../sketches/p5/disruption";
 
export const aboutPageContent: {text: JSX.Element; sketch: (p5) => void}[] = [
  {
    text: <>
      <p>
        I should write something here but I have no idea what
      </p>
      <p>
        Banana, mango, apple, KIWI
      </p>
    </>,
    sketch: starfield
  },
  {
    text: <>
      <p>
        I am on an eternal quest to become a better developer, designer, artist and product leader.
      </p>
      <br/>
      <p>
        I consider myself an end-to-end owner, with a strong dedication to push the boundaries of what I can do in any given domain. I thrive in product-driven companies that empower and cherish creativity, ingenuity and boldness. 
      </p>
      <br/>
      <p>
        I am currently a frontend developer at YNAP for yoox.com; but that doesn't matter does it? 
      </p>
        <br/>
      <p>
        Regardless of my title, what I enjoy doing is solving problems, be it with code, product leadership or operations.
      </p>
    </>,
    sketch: sea
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
    sketch: disruption
  }
]
  
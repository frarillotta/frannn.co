import { sea } from "../sketches/p5";
import { starfield } from "../sketches/p5/starfield";
import { disruption } from "../sketches/p5/disruption";

export const aboutPageContent: {text: JSX.Element; sketch: (p5) => void}[] = [
  {
    text: <>
      <p>
        YEa i definitely need to write some shit in here, idk what tho
      </p>
      <p>
        did this shit update?
      </p> 
    </>,
    sketch: starfield
  },
  {
    text: <>
      <p>
        YEa i definitely need to write some shit in here, idk what tho
      </p>
      <p>
        did this shit update?
      </p> 
    </>,
    sketch: disruption
  },
  {
    text: <>
      <p>
        YEa i definitely need to write some shit in here, idk what tho
      </p>
      <p>
        did this shit update?
      </p> 
    </>,
    sketch: sea
  }
]
  
import type {Roles} from "../types";
import {Shader} from "../components/Shader/Shader";
import {shaders} from "./shaders";

export const roles: Roles[] = [
    {
      company: "Yoox Net-a-Porter",
      title: "Frontend Developer",
      location: "Bologna, Italy",
      date: "May 2021 - Present",
      children: <>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        </p> 
        <p> 
          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </>,  
      shader: <Shader shader={shaders.raymarching}/>
    }, {
      company: "Sovrn",
      title: "Full-stack Software Engineer",
      location: "London, United Kingdom",
      date: "July 2020 - April 2021",
      children: <>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        </p> 
        <p> 
          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </>,    
      shader: <Shader shader={shaders.fullscreenFbm}/>
    }, {
      company: "Sovrn",
      title: "Implementation Engineer II",
      location: "London, United Kingdom",
      date: "January 2020 - June 2020",
      children: <>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        </p> 
        <p> 
          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </>,    
      shader: <Shader shader={shaders.sun}/>
    }, {
      company: "Sovrn",
      title: "Solutions Engineer",
      location: "London, United Kingdom",
      date: "May 2019 - December 2019",
      children: <>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        </p> 
        <p> 
          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </>,     
      shader: <Shader shader={shaders.ditherTexture}/>
    }, {
      company: "Sovrn",
      title: "Operations Specialist",
      location: "London, United Kingdom",
      date: "August 2018 - May 2019",
      children: <>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        </p> 
        <p> 
          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </>, 
      shader: <Shader shader={shaders.simplexNoise}/>
    }
  ];
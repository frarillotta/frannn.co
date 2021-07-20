import {TextCarousel} from "../components/TextCarousel/TextCarousel";
import { iAm, iAmDoing } from "./carouselTerms";
import { fbm } from "../sketches/Glsl";

const homepageText = <>
    <p>Hi! I'm Fran. As you read this, I'm <TextCarousel terms={iAmDoing} color={"hsl(212deg 90% 64%)"}/>.</p>
    <p>I am <TextCarousel terms={iAm} color={"hsl(312deg 90% 64%)"}/>. </p> 
    <p>I am currently based in Bologna, Italy, after having lived in London for the past few years.</p>
    </>
const shader = fbm;

export { homepageText, shader }
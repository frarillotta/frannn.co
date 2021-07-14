import {TextCarousel} from "../components/TextCarousel/TextCarousel";
import { carouselTerms as terms } from "./carouselTerms";
import { fbm } from "../sketches/Glsl";

const homepageText = <>Hi, I'm Fran. As you read this, I am <TextCarousel terms={terms} color={"hsl(212deg 90% 64%)"}/> in <del>London</del> Bologna, Italy.</>

const shader = fbm;

export { homepageText, shader }
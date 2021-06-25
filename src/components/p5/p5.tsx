import Sketch from "react-p5";
import styled from "styled-components";
import {P5Props} from "../../types"

 const P5Renderer = ({setup, draw, windowResized}: P5Props) => {

    //if there is no window definition, then this is getting loaded on SSR, which we don"t like
    if (!window) {
        throw false;
    }

	return <StyledSketch 
        draw={draw} 
        setup={setup} 
        windowResized={windowResized}
        />;

};

const StyledSketch = styled(Sketch)`
    width: 100%;
    height: 100%;
`

export default P5Renderer
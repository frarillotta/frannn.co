import Sketch from "react-p5";
import styles from "./p5.module.css";
import {P5Props} from "../../types"

 const P5Renderer = ({setup, draw, windowResized}: P5Props) => {

    //if there is no window definition, then this is getting loaded on SSR, which we don't like
    if (!window) {
        throw false;
    }

	return <Sketch 
        className={styles.p5} 
        draw={draw} 
        setup={setup} 
        windowResized={windowResized}
        />;

};

export default P5Renderer
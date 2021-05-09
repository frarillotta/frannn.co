import {Button} from "../Button/Button";
import styles from "./Header.module.css";

function Header() {

    return (
    
        <ul className={styles.headerWrapper}>
            <li>
                <Button text={"Hello I am a button"} link={"#"}></Button>
            </li>
            <li>
                <Button text={"What I do"} link={"#"}></Button>
            </li>
        </ul>
    )
}

export {Header}
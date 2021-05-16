import {HeaderLink} from "../HeaderLink/HeaderLink";
import styles from "./Header.module.css";
import {HeaderProps} from "../../types";

const Header = ({variant = "black"}: HeaderProps) => {

    return (
    
        <ul className={styles.headerWrapper} style={{color: `${variant}`}}>
            <li>
                <HeaderLink text={"Home"} href={"/"}/>
            </li>
            <li>
                <HeaderLink text={"About"} href={"/about"}/>
            </li>
            <li>
                <HeaderLink text={"Work"} href={"/work"}/>
            </li>
        </ul>
    )
}

export {Header}
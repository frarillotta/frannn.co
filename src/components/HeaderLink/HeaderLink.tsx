import {Anchor} from "../Anchor/Anchor";
import styles from "./HeaderLink.module.css";
import {HeaderLinkProps} from "../../types";


const HeaderLink = ({href, text}: HeaderLinkProps) => {

    return <span className={`${styles.link} ${styles.linkDia}`} ><Anchor href={href}>{text}</Anchor></span>

}

export {HeaderLink}
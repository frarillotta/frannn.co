import styles from "./Button.module.css";

function Button({text, link}) {
    
    return <a href={link} className={`${styles.link} ${styles.linkDia}`}>{text}</a>

}

export {Button}
import styles from "./CompositeCard.module.css";
import {CompositeCardProps} from "../../types";

const CompositeCard = ({children, subtitle, location, invert = false, title, date = "", renderEl = null}: CompositeCardProps) => {

    const flexDirection = invert ? "row-reverse" : "row"

    return (
        <section
            style={{
                flexDirection: flexDirection
            }} 
            className={styles.cardWrapper}
        >
            <div className={styles.contentWrapper}>
                <div className={styles.titleWrapper}>
                    <h2 className={styles.title}>
                        {title}
                    </h2>
                    <h2 className={styles.subtitle}>
                        {subtitle}
                    </h2>
                    <h2 className={styles.location}>
                        {location}
                    </h2>
                    <h2 className={styles.date}>
                        {date}
                    </h2>
                </div>
                <article className={styles.contentText}>
                    {children}
                </article>
            </div>
            <aside className={styles.renderElWrapper}>
                <div className={styles.renderEl}>
                    {renderEl}
                </div>
            </aside>
        </section>
    )
}

export {CompositeCard}
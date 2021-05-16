import {p5, aboutPageContent} from "../constants";
import dynamic from "next/dynamic";
import {Header} from "../components/Header/Header";
import styles from "../styles/About.module.css";

//avoid SSR and do some code splitting!
const P5Renderer = dynamic(
  () => import('../components/p5/p5'),
  { ssr: false }
)

export default function About() {

    const {draw, setup, windowResized} = p5.sea;

    return (
        <div className={styles.container}>
            <Header variant={"black"}></Header>
            <main className={styles.main}>
                <section className={styles.section}>
                    <div className={styles.p5El}>
                        <P5Renderer draw={draw} setup={setup} windowResized={windowResized}/>
                    </div>
                    <p className={styles.text}>
                        {aboutPageContent.text}
                    </p>
                </section>
            </main>
        </div>
    )

}
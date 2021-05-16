import styles from "../styles/Home.module.css"
import {Shader} from "../components/Shader/Shader"
import {shaders, homepageText} from "../constants"
import {Header} from "../components/Header/Header"

export default function Home() {

  return (
    <div className={styles.container}>
      <div className={styles.background}>
          <Shader shader={shaders.fbm}/>
      </div>
      <Header variant={"white"}/>
      <main className={styles.main}>
        <div className={styles.spacer}>
          <h1 className={styles.hi}>
          </h1>
        </div>
        <article className={styles.article}>
           {homepageText}
        </article>
          
      </main>
    </div>
  )
}

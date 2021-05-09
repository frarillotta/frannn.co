import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Homepage from "./Homepage/Homepage.tsx"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <script type="text/javascript" src="https://rawgit.com/patriciogonzalezvivo/glslCanvas/master/dist/GlslCanvas.js"/>
      </Head>
        <Homepage/>
    </div>
  )
}

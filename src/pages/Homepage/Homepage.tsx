import {Shader} from "../../components/Shader/Shader"
import {shaders} from "../../constants"
import styles from "../../styles/App.module.css"
import {Header} from "../../components/Header/Header"

function App() {
    return (
        <main>
            <div className={styles.background}>
                <Shader fragCode={shaders.fbm}/>
            </div>
            <Header></Header>
        </main>
    )
}

export default App
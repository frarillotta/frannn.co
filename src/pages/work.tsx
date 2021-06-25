import {Header} from "../components/Header/Header";
import styles from "../styles/Work.module.css";
import {CompositeCard} from "../components/CompositeCard/CompositeCard";
import {roles} from "../constants";
import { AnimationWrapper } from "../components/AnimationWrapper/AnimationWrapper";

export default function Work() {

    return (
        <AnimationWrapper className={styles.container}>
            <Header variant={"black"}/>
            <main className={styles.main}>
                {roles.map((role, index)=>{
                    return <CompositeCard 
                        key={role.title}
                        invert={index % 2 === 0}
                        title={role.company}
                        location={role.location}
                        subtitle={role.title}
                        date={role.date}
                        renderEl={role.shader}
                    >            
                        {role.children}
                    </CompositeCard>
                })}
            </main>
        </AnimationWrapper>
    )

}

import styles from '../styles/Home.module.sass'
import captains from '../img/captains.png'
import Particle from '../Components/Particle'


    export default function Home(){
        return(
            <div className={styles.home}>
                <Particle/>
                <div className={styles.captains}>
                    
                    <div className={styles.title}>
                        <h1>Alien</h1>
                        <h2>Academy</h2>
                    </div>

                    <img src={captains}/>
                    <div className={styles.line}></div>
                </div>
                <div className={styles.bg}></div>
                <div className={styles.bg2}>
                    <p>Desenvolvido por Alex (@Ryuu.Dev)</p>
                </div>
                
            </div>
    )
}

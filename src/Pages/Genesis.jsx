import Lineup from '../Components/Lineup';
import { Genesis } from '../../data.json';
import Panel from '../Components/Panel';
import styles from '../styles/Genesis.module.sass'


export default function genesis() {
    return (
        <div className={styles.genesis}>
            
            <div className={styles.background}></div>

            <div className={styles.container}>
                <Lineup Team={Genesis} />
                <Panel />
            </div>
        </div>
    );
}

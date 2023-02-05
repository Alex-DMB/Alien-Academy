import Lineup from '../Components/Lineup';
import styles from '../styles/Genesis.module.sass'
import data from '../../data.json';
import Panel from '../Components/Panel';

export default function Genesis() {
    return (
        <div className={styles.genesis}>
            <div className={styles.background}></div>
            <div className={styles.container}>
                <Lineup Team={data.Chaos} />
                <Panel />
            </div>

        </div>
    );
}

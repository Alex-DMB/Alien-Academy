import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import styles from '../styles/Teams.module.sass'
import { BrowserRouter as Router, Link } from 'react-router-dom'


export default function Teams() {

    const {data} = useContext(DataContext)

    return (
        <div className={styles.teams}>
            <div className={styles.container}>
                <h1>Equipes</h1>
                <div className={styles.teams_container}>
                
                <Link to='/alien-academy/genesis'>
                    <div className={`${styles.genesis} ${styles.team_container}`}>
                        <img src={data.Genesis[0].emblem}/>
                        <span>{data.Genesis[0].name}</span>
                    </div>
                </Link>
                <Link to='/alien-academy/chaos'>
                    <div className={`${styles.chaos} ${styles.team_container}`}>
                        <span>{data.Chaos[0].name}</span>
                        <img src={data.Chaos[0].emblem}/>
                    </div>
                </Link>

                    <div className={`${styles.prominence} ${styles.team_container}`}>
                        <img src={data.Prominence[0].emblem}/>
                        <span>{data.Prominence[0].name}</span>
                    </div>

                    <div className={`${styles.diamonddust} ${styles.team_container}`}>
                        <span>{data.DiamondDust[0].name}</span>
                        <img src={data.DiamondDust[0].emblem}/>
                    </div>

                    <div className={`${styles.epsilonkai} ${styles.team_container}`}>
                        <img src={data.EpsilonKai[0].emblem}/>
                        <span>{data.EpsilonKai[0].name}</span>
                    </div>

                    <div className={`${styles.geministorm} ${styles.team_container}`}>
                        <span>{data.GeminiStorm[0].name}</span>
                        <img src={data.GeminiStorm[0].emblem}/>
                    </div>


                </div>
            </div>
        </div>
    );
}

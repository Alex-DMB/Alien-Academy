import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import styles from '../styles/Lineup.module.sass';

export default function Lineup(props) {
    const { info, setInfo, positionIcon, setTeamEmblem } = useContext(DataContext);
    
    setTeamEmblem(props.Team[0].emblem)
    return (
        <div className={styles.lineup}>
            <ul className={styles.listContainer}>
                <li className={styles.nameTeam}>{props.Team[0].name}</li>
                
                {props.Team.map((player, index) => (
                    

                    index > 0 && (

                        <div 
                            onMouseOver={() => setInfo(player)}
                            className={` ${styles.playerBar} ${index % 2 === 0 ? styles.lightBG : styles.darkBG}`}>
                            
                            <span>
                                <img className={styles.positionIcon}
                                    src=
                                    {`
                                        ${player.position === 'Goleiro'? `${positionIcon.GK}`: ``}
                                        ${player.position === 'Zagueiro'? `${positionIcon.DF}`: ``}
                                        ${player.position === 'Meio-Campista'? `${positionIcon.MF}`: ``} 
                                        ${player.position === 'Atacante'? `${positionIcon.FW}`: ``}
                                    `}
                                />
                            </span>
                            <span>{index}</span>

                            <li key={index}> {player.name} </li>

                        </div>
                    )
                ))}
                <li className={styles.endList}></li>

            </ul>
        </div>
    );
}

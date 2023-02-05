import { useContext, useState } from 'react';
import { DataContext } from '../context/DataContext';
import styles from '../styles/Panel.module.sass';

export default function Panel() {
    const { info, elementIcon, genderIcon, teamEmblem } = useContext(DataContext);
    return (
        <div className={styles.panel}>
                

            {info && (
                <div className={styles.info_Container}>
                    
                    <img className={styles.picture} src={info.picture ? info.picture : 'http://www.clker.com/cliparts/g/T/l/W/f/9/blank-profile.svg.med.png'}/>

                    <span className={styles.player_Name}>{info.name ? info.name : 'Não informado'}</span>

                    <div className={styles.info_Row}>
                    <span>Nome Alien</span>
                    <span>{info.nameAlien ? info.nameAlien : 'Não informado'}</span>
                    </div>
                    
                    <div className={styles.info_Row}>
                        <span>Elemento</span>
                        <span>
                            <span>
                                <img className={styles.icon} src={`

                                    ${info.element === 'Vento'? `${elementIcon.Wind}`: ``}
                                    ${info.element === 'Fogo'? `${elementIcon.Fire}`: ``}
                                    ${info.element === 'Madeira'? `${elementIcon.Wood}`: ``} 
                                    ${info.element === 'Terra'? `${elementIcon.Earth}`: ``}

                                `}/>
                            </span>
                            {info.element ? info.element : 'Não informado'}
                        </span>
                    </div>

                    <div className={styles.info_Row}>
                        <span>Gênero</span>
                            <span>
                                <span>
                                    <img className={styles.icon} src={`

                                        ${info.gender === 'Masculino'? `${genderIcon.Male}`: ``}
                                        ${info.gender === 'Feminino'? `${genderIcon.Female}`: ``}

                                    `}/>
                                </span>
                            {info.gender ? info.gender : 'Não informado'}
                        </span>
                    </div>

                    <div className={styles.info_Row}>
                        <span>Posição</span>
                        <span>{info.position ? info.position : 'Não informado'}</span>
                    </div>

                    <div className={styles.info_Row}>
                        <span>Ano escolar</span>
                        <span>{info.schoolYear}</span>
                    </div>


                    <img className={styles.team_Emblem} src={teamEmblem}/>
                        

                </div>
            )}
                
        </div>
    );
}

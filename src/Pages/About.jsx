import styles from '../styles/About.module.sass'
import imgGenesis from '../img/Genesis.png'
import imgChaos from '../img/Chaos.png'
import imgProminence from '../img/Prominence.png'
import imgDiamondDust from '../img/DiamondDust.png'
import imgEpsilonKai from '../img/EpsilonKai.png'
import imgGeminiStorm from '../img/GeminiStorm.png'


export default function About() {
    return (
        <div className={styles.about}>
            
            <div className={styles.container}>
                <h1>Sobre</h1>
                
                <h2>Sobre a Alien Academy</h2>

                <p>Aliea Gakuen é uma academia composta por equipes 'alienígenas' que lutam usando o poder do Meteorito Aliea, com exceção da Equipe Genesis, que foi treinado para ser o melhor competindo contra as equipes que usaram o poder do Meteorito Aliea. O velho que começou a academia, Kira Seijirou, originalmente pretendia usá-la para fins militares, mas o primeiro-ministro Zaizen Sousuke, pai de Touko, recusou. Como o primeiro-ministro adorava futebol, Seijirou o usou para fins de futebol para causar destruição no Japão até que o primeiro-ministro Zaizen Sousuke aceitasse. Aliea Gakuen descobre que eles não são alienígenas, mas sim as crianças humanas do Orfanato Ohisama En.</p>

                <h2>Sobre o Fundador</h2>

                <img src='https://static.wikia.nocookie.net/inazuma-eleven/images/5/59/Kira-seijirou-ares.png' alt='Kira'></img>

                <p>Kira Seijirou é o principal antagonista da segunda temporada da série Inazuma Eleven. Ele é o proprietário/fundador de Kira Zaibatsu e também o criador/proprietário do orfanato Ohisama En, e o criador/líder de Aliea Gakuen. Ele também é o pai de Kira Hitomiko e Kira Hiroto, e também os membros de Aliea Gakuen/pai adotivo órfão.</p>

                <h2>Galeria</h2>
                
                <div className={styles.gallery}>
                    <div className={styles.gallery_team}>
                        <img src={imgGenesis}/>
                        <span>Genesis</span>
                    </div>
                    <div className={styles.gallery_team}>
                        <img src={imgChaos}/>
                        <span>Chaos</span>
                    </div>
                    <div className={styles.gallery_team}>
                        <img src={imgProminence}/>
                        <span>Prominence</span>
                    </div>
                    <div className={styles.gallery_team}>
                        <img src={imgDiamondDust}/>
                        <span>Diamond Dust</span>
                    </div>
                    <div className={styles.gallery_team}>
                        <img src={imgEpsilonKai}/>
                        <span>Epsilon Kai</span>
                    </div>
                    <div className={styles.gallery_team}>
                        <img src={imgGeminiStorm}/>
                        <span>Gemini Storm</span>
                    </div>

                </div>
            </div>
        </div>
    );
}

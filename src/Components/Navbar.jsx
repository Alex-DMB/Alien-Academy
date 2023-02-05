
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { FaMeteor } from 'react-icons/fa';
import styles from '../styles/Navbar.module.sass'

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <ul>
                <li>
                <Link to='/alien-academy/'><FaMeteor/></Link>
                </li>
                <li><Link to='/alien-academy/'>Home</Link></li>
                <li><Link to='/alien-academy/about'>Sobre</Link></li>
                <li><Link to='/alien-academy/teams'>Equipes</Link></li>
            </ul>
        </div>
    );
}

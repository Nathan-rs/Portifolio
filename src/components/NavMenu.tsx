import styles from '../assets/styles/navmenu.module.scss'
import { AlignJustify } from 'lucide-react'

export function NavMenu() {
    return (
        <>
            <div className={styles.contenedorHeader}>
                <header>
                    <div className={styles.logo}>
                        <a href="#">Nathan</a>
                    </div>
                    <nav>
                        <ul>
                            <li><a href="#inicio">INICIO</a></li>
                            <li><a href="#sobremi">SOBRE MI</a></li>
                            <li><a href="#skill">SKILL</a></li>
                            <li><a href="#curriculum">CURRICULUM</a></li>
                            <li><a href="#portfolio">PORTFOLIO</a></li>
                            <li><a href="#contacto">CONTACTO</a></li>
                        </ul>
                    </nav>
                    <div className={styles.navResponsive}>
                        <AlignJustify />
                    </div>
                </header>
            </div>
        </>
    )
}
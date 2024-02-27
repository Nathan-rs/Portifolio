import styles from '../assets/styles/cardProfile.module.scss'
import imgProfile from '../assets/images/imgProfile.jpg'
import {Linkedin} from 'lucide-react'
import {Github} from 'lucide-react'

export function CardPerfil () {
    return (
        <>
            <section id={styles.inicio} className={styles.inicio}>
                <div className={styles.contenidoBanner}>
                    <div className={styles.contenedorImg}>
                        <img src={imgProfile} alt="" />
                    </div>
                    <h1>Nathan Ramos</h1>
                    <h2>Engenheiro de Software</h2>
                    <div className={styles.redes}>
                        <Linkedin />
                        <Github />
                    </div>
                </div>

            </section>
        </>
    )
}
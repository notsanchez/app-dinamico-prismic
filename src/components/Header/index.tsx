import styles from './styles.module.scss'
import Image from 'next/image';
import logo from '../../../public/images/neon-logo.png'

import { ActiveLink } from '../ActiveLink'

export function Header() {
  return (
    <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
            <ActiveLink href="/" activeClassName={styles.active}>
                <a>
                    <Image src={logo} width={130} height={35} quality={100}/>
                </a>
            </ActiveLink>

            <nav>
                <ActiveLink href="/" activeClassName={styles.active}>
                    <a>Home</a>
                </ActiveLink>

                <ActiveLink href="/posts" activeClassName={styles.active}>
                    <a>Conteúdos</a>
                </ActiveLink>

                <ActiveLink href="/sobre" activeClassName={styles.active}>
                    <a>Quem somos?</a>
                </ActiveLink>
            </nav>

            <a className={styles.readyButton} type='button' href="https://github.com/notsanchez">COMEÇAR</a>

        </div>
    </header>
  )
}

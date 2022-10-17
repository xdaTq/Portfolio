import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.navigation}>
        <ul className={styles.ulist}>
          <li>
            <a className={styles.navigationText} href="#home">
              <p>Home</p>
            </a>
          </li>
          <li>
            <a className={styles.navigationText} href="#about">
              <p>About</p>
            </a>
          </li>
          <li>
            <a className={styles.navigationText} href="#blog">
              <p>Blog</p>
            </a>
          </li>
          <li>
            <a className={styles.navigationText} href="#links">
              <p>Links</p>
            </a>
          </li>
        </ul>
      </nav>
    )
}
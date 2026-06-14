import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <span className={styles.logo}>punkelias.dev</span>
        <div className={styles.links}>
          <a href="#apps" className={styles.link}>
            Apps
          </a>
          <a href="#about" className={styles.link}>
            About
          </a>
          <a href="#contact" className={styles.link}>
            Contact
          </a>
        </div>
      </nav>
    </header>
  )
}

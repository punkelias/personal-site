import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span>© {new Date().getFullYear()} Elias</span>
        <span>Built with React + Vite</span>
      </div>
    </footer>
  )
}

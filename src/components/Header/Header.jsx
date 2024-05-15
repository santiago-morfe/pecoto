import styles from './Header.module.css'
import { Link } from 'react-router-dom'

export function Header () {
  return (
    <header className={styles.header}>
      <Link to='/' className={styles.link}>
        <h1 className={styles.title}>Pecoto</h1>
      </Link>
    </header>
  )
}

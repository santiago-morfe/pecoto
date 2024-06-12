import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { DisplayedNav, FoldedNav } from '../Nav/Nav'
import { IconMenu } from '../icons/Icons'

export function Header () {
  const [isMenuOpen, setIsMenuOpen] = useState(true)

  function toggleMenu () {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={styles.header + '  ' + (isMenuOpen ? styles.menuOpen : styles.menuClosed)}>
      <div className={styles.head}>
        <button
          className={styles.menuButton}
          onClick={toggleMenu}
        >
          <IconMenu />
        </button>
        {isMenuOpen &&
        <Link to='/'>
          <h1 className={styles.title}>PECOTO</h1>
        </Link>
      }
      </div>
      {isMenuOpen ? <DisplayedNav /> : <FoldedNav />}
    </header>
  )
}

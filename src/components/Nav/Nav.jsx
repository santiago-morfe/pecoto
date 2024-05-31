import styles from './Nav.module.css'
import { Link, useLocation } from 'react-router-dom'
import { logout } from '../../services/session'

export function Nav () {
  // saber en que ruta estoy
  const location = useLocation()

  function getLocationClass (path) {
    return location.pathname === path ? styles.active : ''
  }

  return (
    <nav className={ styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item + ' ' + getLocationClass('/')}>
          <Link to='/' className={styles.link}>inicio</Link>
        </li>
        <li className={styles.item + ' ' + getLocationClass('/perfil') }>
          <Link to='/perfil' className={styles.link}>perfil</Link>
        </li>
        <li className={styles.item + ' ' + getLocationClass('/info')}>
          <Link to='/info' className={styles.link}>informacion</Link>
        </li>
        <li className={styles.item + ' ' + getLocationClass('/manual')}>
          <Link to='/manual' className={styles.link}>manual</Link>
        </li>
        <li className={styles.item + ' ' + getLocationClass('/Material')}>
          <Link to='/Material' className={styles.link}>material</Link>
        </li>
        <button
          onClick={logout}
          className={styles.button}
        >
          serrar sesion
        </button>
      </ul>
    </nav>
  )
}

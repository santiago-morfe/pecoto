import styles from './Nav.module.css'
import { Link, useLocation } from 'react-router-dom'
import { IconHome, IconMaterial, IconManual, IconConfig } from '../icons/Icons'
import { ItemNavUser, ItemNavUser2 } from '../itemsProfile/ItemNavUser'

export function DisplayedNav () {
  const location = useLocation()

  function getLocationClass (path) {
    return location.pathname === path ? styles.active : ''
  }

  return (
    <nav className={styles.displayedNav}>
      <ul className={styles.list}>
        <li className={getLocationClass('/perfil') + ' ' + styles.itemNavHead}>
          <Link to='/perfil' className={styles.link}>
            <ItemNavUser />
          </Link>
        </li>
        <li className={getLocationClass('/') + ' ' + styles.itemNav}>
          <Link to='/' className={styles.link}>
          <IconHome variant={1} />
            <p>Inicio</p>
          </Link>
        </li>
        <li className={getLocationClass('/Material') + ' ' + styles.itemNav}>
          <Link to='/Material' className={styles.link}>
          <IconMaterial variant={1} />
            <p>Material De Estudio</p>
          </Link>
        </li>
        <li className={getLocationClass('/manual') + ' ' + styles.itemNav}>
          <Link to='/manual' className={styles.link}>
          <IconManual variant={1} />
            <p>Manual Me Uso</p>
          </Link>
        </li>
        <li className={getLocationClass('/manual') + ' ' + styles.itemNav}>
          <Link to='/configuracion' className={styles.link}>
          <IconConfig variant={1} />
            <p>Configuracion</p>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export function FoldedNav () {
  const location = useLocation()

  function getLocationClass (path) {
    return location.pathname === path ? styles.active : ''
  }

  return (
    <nav className={styles.foldedNav}>
      <ul className={styles.list}>
        <li className={getLocationClass('/perfil') + ' ' + styles.itemNavHead}>
          <Link to='/perfil' className={styles.link}>
            <ItemNavUser2 />
          </Link>
        </li>
        <li className={getLocationClass('/') + ' ' + styles.itemNav}>
          <Link to='/' className={styles.link}>
            <IconHome variant={2} />
          </Link>
        </li>
        <li className={getLocationClass('/Material') + ' ' + styles.itemNav}>
          <Link to='/Material' className={styles.link}>
            <IconMaterial variant={2} />
          </Link>
        </li>
        <li className={getLocationClass('/manual') + ' ' + styles.itemNav}>
          <Link to='/manual' className={styles.link}>
            <IconManual variant={2} />
          </Link>
        </li>
        <li className={getLocationClass('/configuracion') + ' ' + styles.itemNav}>
          <Link to='/configuracion' className={styles.link}>
            <IconConfig variant={2} />
          </Link>
        </li>
      </ul>
    </nav>
  )
}

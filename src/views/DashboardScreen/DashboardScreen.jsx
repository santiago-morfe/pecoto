import styles from './DashboardScreen.module.css'
import { Header } from '../../components/Header/Header'
import { Nav } from '../../components/Nav/Nav'

export default function DashboardScreen () {
  return (
    <div className={styles.dashboard}>
      <Header />
      <Nav />
    </div>
  )
}

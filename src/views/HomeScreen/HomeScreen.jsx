import styles from './HomeScreen.module.css'
import { Header } from '../../components/Header/Header'

export default function HomeDashboard () {
  return (
    <div className={styles.dashboard}>
      <Header />
    </div>
  )
}

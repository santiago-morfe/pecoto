import styles from './HomeScreen.module.css'
import { Header } from '../../components/Header/Header'
import { Main } from './components/Main/Main'
import { StateInfo } from './components/StateInfo/StateInfo'

export default function HomeScreem () {
  return (
    <div className={styles.content}>
      <Header />
      <Main />
      <StateInfo />
    </div>
  )
}

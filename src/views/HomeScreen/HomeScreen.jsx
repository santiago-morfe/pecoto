import styles from './HomeScreen.module.css'
import { Header } from '../../components/Header/Header'
import { Main } from './sections/Main/Main'

export default function HomeScreem () {
  return (
    <div className={styles.content}>
      <Header />
      <Main />
      <section>informacion de avance</section>
    </div>
  )
}

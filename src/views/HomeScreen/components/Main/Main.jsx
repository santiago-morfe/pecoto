import styles from './Main.module.css'
import { ModulList } from '../ModulList/ModulList'
export function Main () {
  return (
    <main className={styles.content}>
      <ModulList />
    </main>
  )
}

import styles from './NotFoundScreen.module.css'
export default function NotFoundScreen () {
  return (
    <div className={styles.container}>
      <h1 className={styles.title} >404 Not Found</h1>
      <p className={styles.paragraph} >Sorry, the page you are looking for does not exist.</p>
    </div>
  )
}

import styles from './LoginScreen.module.css'
import { iniciarSession } from '../../services/session.js'
import { Navigate } from 'react-router-dom'
import { useState } from 'react'

export default function LoginScreen () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  document.addEventListener('submit', (event) => {
    event.preventDefault()
  })

  function handleSubmit () {
    if (email === '' || password === '') {
      setError('email y password son requeridos')
      return
    }
    setLoading(true)
    iniciarSession(email, password)
      .then(response => {
        if (response.token) {
          return <Navigate to='/' />
        }
      })
      .catch(error => {
        setLoading(false)
        setError(error.error)
      })
  }

  return (
    <div className={styles.login}>
      <form className={styles.form} onSubmit={() => handleSubmit()} >
        <h1 className={styles.title}>Login</h1>
        {error && <p className={styles.error}>{error}</p>}
        <input
          className={styles.input}
          type='email'
          placeholder='Email'
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <input
          className={styles.input}
          type='password'
          placeholder='Password'
          value={password}
          onChange={event => setPassword(event.target.value)}
        />

        {loading &&
          <button
            className={styles.buttonLoading}
            type='button'
          >
            Loading...
          </button>
        }

        {!loading &&
          <button
            className={styles.button}
            type='submit'
          >
            Login
          </button>
        }

      </form>
    </div>
  )
}

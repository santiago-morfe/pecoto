import styles from './LoginScreen.module.css'
import { Register } from './components/Register'
import { Login } from './components/Login'
import { useState } from 'react'

export default function LoginRegisterScreen () {
  const [loginOrRegister, setLoginOrRegister] = useState('login')

  return (
    <div className={styles.container} >
      <div className={styles.main} >
        <div className={(loginOrRegister === 'login' ? styles.login : styles.register)}>
          {loginOrRegister === 'login' ? <Login /> : <Register />}
        </div>
        <div className={styles.info_container}>
          <div className={styles.info1}>

            <h2>
              ¿Ya tienes cuenta?
            </h2>
            <p>
              Inicia sesión para que puedas disfrutar
            </p>
            <button
              onClick={() => setLoginOrRegister('login')}
            >
              Iniciar Sesión
            </button>
          </div>
          <div className={styles.info2}>
            <h2>
              ¿No tienes cuenta?
            </h2>
            <p>
              Regístrate para que puedas iniciar sesión
            </p>
            <button
              onClick={() => setLoginOrRegister('register')}
            >
              Regístrate
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

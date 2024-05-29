import { useState } from 'react'
import { login } from '../../../services/session.js'

export function Login () {
  const [loginData, setLoginData] = useState({ username: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      await login(loginData)
      // window.location.reload()
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
    >
      <h1>Iniciar Sesión</h1>
      {error && <p>{error}</p>}
      <input
        type='text'
        name='username'
        placeholder='Nombre de usuario'
        required
        autoComplete='username'
        onChange={e => setLoginData({ ...loginData, username: e.target.value })}
      />
      <input
        type='password'
        name='password'
        required
        placeholder='Contraseña'
        autoComplete='current-password'
        onChange={e => setLoginData({ ...loginData, password: e.target.value })}
      />
      <button
        type="submit"
      >
        {loading ? 'Cargando...' : 'Iniciar Sesión'}
      </button>
    </form>
  )
}

import { useState } from 'react'
import { register } from '../../../services/session.js'

export function Register () {
  const [registerData, setRegisterData] = useState({ username: '', password: '', confirmPassword: '', userprofile: { fullname: '', address: '' } })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    if (registerData.password !== registerData.confirmPassword) {
      setError('Las contraseñas no coinciden')
      setLoading(false)
      return
    }
    try {
      await register(registerData)
      window.location.href = '/'
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Únete a Pecoto</h1>
      {error && <p>{error}</p>}
      <input
        type='text'
        placeholder='nombre completo'
        autoComplete= 'fullname'
        required
        onChange={e => setRegisterData({ ...registerData, userprofile: { ...registerData.userprofile, fullname: e.target.value } })}
      />
      <input
        type='text'
        placeholder='apellidos'
        autoComplete='address'
        required
        onChange={e => setRegisterData({ ...registerData, userprofile: { ...registerData.userprofile, address: e.target.value } })}
      />
      <input
        type='text'
        placeholder='Nombre de usuario'
        autoComplete='username'
        required
        onChange={e => setRegisterData({ ...registerData, username: e.target.value })}
      />
      <input
        type='password'
        placeholder='Contraseña'
        autoComplete='new-password'
        required
        onChange={e => setRegisterData({ ...registerData, password: e.target.value })}
      />
      <input
        type='password'
        placeholder='Confirmar contraseña'
        autoComplete='new-password'
        required
        onChange={e => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
      />
      <input
        type="submit"
        value={loading ? 'Cargando...' : 'Registrarse'}
      />
    </form>
  )
}

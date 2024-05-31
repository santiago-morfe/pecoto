import { API_URL } from './config.js'
import { jwtDecode } from 'jwt-decode'

export const login = async ({ username, password }) => {
  return fetch(`${API_URL}/login/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
    .then(response => response.json())
    .then(({ access, refresh }) => {
      localStorage.setItem('accessToken', access)
      localStorage.setItem('refreshToken', refresh)
    })
    .catch(error => {
      throw new Error('Credenciales incorrectas', error)
    })
}

export const register = async ({ username, password, userprofile }) => {
  return fetch(`${API_URL}/api/v1/users/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password, userprofile })
  })
    .then(response => response.json())
    .then((response) => {
      if (response.status === '201') {
        return login({ username, password })
      }
    })
    .catch(error => {
      throw new Error('Error al registrar', error)
    })
}

export const isAuthenticated = () => {
  const accessToken = localStorage.getItem('accessToken')
  if (!accessToken) return false
  if (isTokenExpired(accessToken)) return false
  return true
}

export const logout = () => {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
  window.location.reload()
}

export const refreshToken = async () => {
}

const isTokenExpired = (token) => {
  const { exp } = jwtDecode(token)
  return (Date.now() >= exp * 1000)
}

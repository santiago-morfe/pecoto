import { API_URL } from './config.js'
import { jwtDecode } from 'jwt-decode'

export const login = async ({ username, password }) => {
  try {
    const response = await fetch(`${API_URL}/api/v1/token/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })

    if (response.ok) {
      const { access, refresh } = await response.json()
      localStorage.setItem('accessToken', access)
      localStorage.setItem('refreshToken', refresh)
    } else {
      const { error } = await response.json()
      throw new Error(error)
    }
  } catch (error) {
    throw new Error('Usuario o contraseña incorrectos')
  }
}

export const register = async ({ username, password, userprofile }) => {
  const response = await fetch(`${API_URL}/api/v1/users/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password, userprofile })
  })

  if (response.ok) {
    return true
  } else {
    const { error } = await response.json()
    throw new Error(error)
  }
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
}

export const refreshToken = async () => {
}

const isTokenExpired = (token) => {
  const { exp } = jwtDecode(token)
  return Date.now() >= exp * 1000
}

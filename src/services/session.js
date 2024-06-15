import { API_URL } from './config.js'
import { jwtDecode } from 'jwt-decode'

export async function login ({ username, password }) {
  const response = await fetch(`${API_URL}/login/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(`Error: ${errorData.message}`)
  }

  const { access, refresh } = await response.json()
  localStorage.setItem('accessToken', access)
  localStorage.setItem('refreshToken', refresh)
}

export async function register ({ username, password, userprofile }) {
  const response = await fetch(`${API_URL}/api/v1/users/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password, userprofile })
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(`Error: ${errorData.message}`)
  }

  return await login({ username, password })
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

export const getModulos = async (id) => {
  const  response = await fetch(`${API_URL}/module/${id}/`
  ,{method:'GET',
    headers: {
      'Content-Type':'aplication/json'
    }
  } 
)
if (!response.ok)
  {
    const errorData = await response.json()
    throw new Error (`Error: ${errorData.message}`)
  }
  return await response.json() 
}

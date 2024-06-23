import { API_URL } from './config.js'
// import { jwtDecode } from 'jwt-decode'

export const getModuloContent = async (id) => {
  const token = localStorage.getItem('accessToken')
  const response = await fetch(`${API_URL}//module/${id}/`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }

  })

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(`Error: ${errorData.message}`)
  }

  return await response.json()
}

export const getModulos = async () => {
  const token = localStorage.getItem('accessToken')
  const response = await fetch(`${API_URL}/api/v1/modules/`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(`Error: ${errorData.message}`)
  }

  return await response.json()
}

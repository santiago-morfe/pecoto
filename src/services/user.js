import { API_URL } from './config.js'
import { jwtDecode } from 'jwt-decode'

export const userPorfiles = async () => {
  const userId = jwtDecode(localStorage.getItem('accessToken')).user_id
  const response = await fetch(`${API_URL}/api/v1/users/${userId}/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(`Error: ${errorData.message}`)
  }
  return await response.json()
}

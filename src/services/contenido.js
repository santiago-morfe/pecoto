import { API_URL } from './config.js'
// import { jwtDecode } from 'jwt-decode'

export const getModuloContent = async (id) => {
  const response = await fetch(`${API_URL}//module/${id}/`, {
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

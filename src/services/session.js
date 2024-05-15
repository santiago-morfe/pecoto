import { API_URL } from './config.js'

export function iniciarSession (email, password) {
  return fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      return response.json().then(json => Promise.reject(json))
    })
    .then(response => {
      localStorage.setItem('token', response.token)
      return response
    })
}

export function cerrarSession () {
  return fetch(`${API_URL}/auth/logout`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
    .then(response => {
      if (response.ok) {
        localStorage.removeItem('token')
        return response.json()
      }
      return response.json().then(json => Promise.reject(json))
    })
}

export function verificarSession () {
  return fetch(`${API_URL}/verify`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      return response.json().then(json => Promise.reject(json))
    })
    .then(response => {
      return response
    })
    .catch(error => {
      return Promise.reject(error)
    })
}

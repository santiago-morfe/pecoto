import { useState, useEffect } from 'react'
import { userPorfiles } from '../../services/user'

export function ItemNavUser () {
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    userPorfiles()
      .then((response) => {
        setUser(response)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <>
    {loading && <p>Cargando...</p>}
    {!loading && (
      <>
      <img src="" alt="" />
      <div>
        <h3>{user.userprofile.fullname}</h3>
        <p>Aprendis</p>
      </div>
      </>
    )}
    </>

  )
}

export function ItemNavUser2 () {
  return (
    <>
      <img src="" alt="" />
    </>
  )
}

import { useState, useEffect } from 'react'
import { getModulos } from '../../../../services/contenido'
import { ItemModulList } from '../ItemModulList/ItemModulList'
import styles from './ModulList.module.css'

export function ModulList () {
  const [moduls, setModuls] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    getModuls()
  }, [])

  const getModuls = async () => {
    try {
      const response = await getModulos()
      setModuls(response.results)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {
        loading && <p>Loading...</p>
      }
      {
        !loading && (
          <ul className={styles.list}>
            {moduls.map(modul => (
              <ItemModulList key={modul.id} modul={modul} />
            ))}
          </ul>
        )
      }
    </>
  )
}

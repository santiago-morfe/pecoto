import styles from './HomeScreen.module.css'
import { Header } from '../../components/Header/Header'
import { getModulos } from '../../services/session'
import { useEffect, useState } from 'react'
export default function HomeDashboard() {
  const [module, setModule] = useState([])
  const [idmodules, setIdmodules] = useState([7, 6, 5, 4, 3, 2])
  useEffect(() => {
    const fetchModules = async () => {
      const responses = await Promise.all(idmodules.map(id => getModulos(id)));
      setModule(responses);
    };
  
    fetchModules();
  }, []);

  useEffect(() => {
    console.log(module)
  }, [module])
  return (
    <div className={styles.dashboard}>
      <Header />
      <main className={styles.main}>
        {module.map((module) => (
          <div key={module.id} className={styles.module}>
            <h3 className={styles.title} style={{ alignContent: 'center' }}>{module.name}</h3>
            <div className={styles.modules}>
              <p className={styles.content}>{module.description}</p>
            </div>
            {module.stages && module.stages.map((stage) => (
              <div key={stage.id} className={styles.modules}>
                <h4 className={styles.subtitle}>{stage.name}</h4>
                <p className={styles.content}>{stage.description}</p>
              </div>
            ))}
          </div>
        ))}
      </main>
    </div>
  )
}

import PropTypes from 'prop-types'
import styles from './ItemModulList.module.css'

export function ItemModulList (props) {
  return (
    <li key={props.modul.id} className={styles.itemModulList}>
      <details>
        <summary>
          <h3>
            {props.modul.name}
          </h3>
        </summary>
        {/* <p>{props.modul.description}</p> */}
        <ul>
          {props.modul.stages.map((stage) => (
            <li key={stage.id}>
              <h3>{stage.name}</h3>
              <p>{stage.description}</p>
            </li>
          ))}
        </ul>
      </details>
    </li>
  )
}

ItemModulList.propTypes = {
  modul: PropTypes.object.isRequired
}

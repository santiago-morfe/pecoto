import PropTypes from 'prop-types'

export function ItemModulList (props) {
  return (
    <li key={props.modul.id}>
      <details>
        <summary>
          <h2>
            {props.modul.name}
          </h2>
        </summary>
        <p>{props.modul.description}</p>
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

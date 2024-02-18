import './index.css'

const DaysComponent = props => {
  const {days} = props
  return (
    <ul className="days-container">
      {days.map(({id, day}) => (
        <DaysKey key={id} day={day} />
      ))}
    </ul>
  )
}

const DaysKey = props => {
  const {day} = props
  return (
    <li className="days-key">
      <p>{day}</p>
    </li>
  )
}

export default DaysComponent

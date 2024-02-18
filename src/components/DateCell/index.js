import './index.css'

const DateCell = props => {
  const {date} = props
  return (
    <li className="date-cell">
      <button type="button" className="date-btn">
        {date}
      </button>
    </li>
  )
}

export default DateCell

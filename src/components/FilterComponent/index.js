import './index.css'

const FilterComponent = props => {
  const {emojisList, daysList} = props

  return (
    <div className="filter-container">
      <div className="select-container">
        <div>
          <select className="select-wrapper" id="emojiSelect">
            {emojisList.map(emoji => (
              <option key={emoji.id} value={emoji.emojiName}>
                {emoji.emojiName}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select className="select-wrapper" id="weekdaySelect">
            {daysList.map(day => (
              <option key={day.id} value={day.day}>
                {day.day}
              </option>
            ))}
          </select>
        </div>
      </div>
      <h1>00</h1>
    </div>
  )
}

export default FilterComponent

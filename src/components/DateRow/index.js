import DateCell from '../DateCell'

import './index.css'

const DateRow = props => {
  const {dates} = props
  return (
    <li className="date-row">
      {dates.map(({id, date, emojiUrl, emojiName}) => (
        <DateCell
          key={id}
          date={date}
          emojiUrl={emojiUrl}
          emojiName={emojiName}
        />
      ))}
    </li>
  )
}

export default DateRow

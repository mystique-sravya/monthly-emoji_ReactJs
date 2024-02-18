import DateRow from '../DateRow'

import './index.css'

const DatesComponent = props => {
  const {dates} = props
  return (
    <ul className="dates-container">
      <DateRow dates={dates.slice(0, 7)} />
      <DateRow dates={dates.slice(7, 14)} />
      <DateRow dates={dates.slice(14, 21)} />
      <DateRow dates={dates.slice(21, 28)} />
      <DateRow dates={dates.slice(28, 35)} />
      <DateRow dates={dates.slice(35, 43)} />
    </ul>
  )
}

export default DatesComponent

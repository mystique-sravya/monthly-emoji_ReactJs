import {Component} from 'react'

import DaysComponent from '../DaysComponent'

import DatesComponent from '../DatesComponent'

import './index.css'

const initialDatesList = [
  {
    id: '380e6b12-a454-11ec-b909-0242ac120002',
    date: '01',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e6cac-a454-11ec-b909-0242ac120002',
    date: '02',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e6de2-a454-11ec-b909-0242ac120002',
    date: '03',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e6efa-a454-11ec-b909-0242ac120002',
    date: '04',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e7012-a454-11ec-b909-0242ac120002',
    date: '05',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e712a-a454-11ec-b909-0242ac120002',
    date: '06',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e7454-a454-11ec-b909-0242ac120002',
    date: '07',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e7576-a454-11ec-b909-0242ac120002',
    date: '08',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e768e-a454-11ec-b909-0242ac120002',
    date: '09',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e77a6-a454-11ec-b909-0242ac120002',
    date: '10',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e78b4-a454-11ec-b909-0242ac120002',
    date: '11',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e79d6-a454-11ec-b909-0242ac120002',
    date: '12',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e7aee-a454-11ec-b909-0242ac120002',
    date: '13',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e7c06-a454-11ec-b909-0242ac120002',
    date: '14',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e7ec2-a454-11ec-b909-0242ac120002',
    date: '15',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e7fda-a454-11ec-b909-0242ac120002',
    date: '16',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e80e8-a454-11ec-b909-0242ac120002',
    date: '17',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e8282-a454-11ec-b909-0242ac120002',
    date: '18',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e83e0-a454-11ec-b909-0242ac120002',
    date: '19',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e8516-a454-11ec-b909-0242ac120002',
    date: '20',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e8638-a454-11ec-b909-0242ac120002',
    date: '21',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e88cc-a454-11ec-b909-0242ac120002',
    date: '22',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e89f8-a454-11ec-b909-0242ac120002',
    date: '23',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e8b1a-a454-11ec-b909-0242ac120002',
    date: '24',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e8c32-a454-11ec-b909-0242ac120002',
    date: '25',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e8d40-a454-11ec-b909-0242ac120002',
    date: '26',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e8e4e-a454-11ec-b909-0242ac120002',
    date: '27',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e8f70-a454-11ec-b909-0242ac120002',
    date: '28',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e90e2-a454-11ec-b909-0242ac120002',
    date: '29',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e94de-a454-11ec-b909-0242ac120002',
    date: '30',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e96be-a454-11ec-b909-0242ac120002',
    date: '31',
    emojiUrl: '',
    emojiName: '',
  },
]

class Calender extends Component {
  render() {
    const {daysList} = this.props
    return (
      <div className="calender-container">
        <h1>January</h1>
        <table className="table-container">
          <DaysComponent days={daysList} />
          <DatesComponent dates={initialDatesList} />
        </table>
      </div>
    )
  }
}

export default Calender

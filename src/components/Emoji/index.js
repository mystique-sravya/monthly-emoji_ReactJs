import './index.css'

const Emoji = props => {
  const {name, imgUrl} = props

  return (
    <li className="emoji-container">
      <h1 className="emj-name">{name}</h1>
      <button key={name} className="emj-btn" type="button">
        <img className="emj-img" src={imgUrl} alt={name} />
      </button>
    </li>
  )
}

export default Emoji

import './style.scss'
import contacts from '../../../data/contacts'

const PContacts = () => {
  return (
    <div className='p-contacts'>
      {
        contacts.map((cont, i) => (
          <div className="p-contacts__item" key={i}>
            <img
              src={cont.iconBw}
              alt={cont.text}
              className="p-contacts__icon"
              width="14px"
              height="14px"
            />
            <div className="p-contacts__text">{cont.text}</div>
          </div>
        ))
      }
    </div>
  )
}

export default PContacts
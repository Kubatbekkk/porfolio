import './style.scss';
import contacts from '../../../data/contacts';

const Top = () => {
  return (
    <section className='top' id='top'>
      <h1 className='top__name'>Kubatbek Mirzabek</h1>
      <h2 className="top__job">Frontend Developer</h2>
      <div className="top__location">
        <div className="top__location-img"></div>
        <p className="top__location-text">Bishkek, Kyrgyzstan</p>
      </div>
      <div className="top__contacts">
        {
          contacts.map((contact) => (
            <a
              key={contact.id}
              href={contact.url}
              className={`top__${contact.id}-btn`}
              style={{ backgroundImage: `url(${contact.icon})` }}
              target='_blank'
            ></a>
          ))
        }
      </div>
      <div className="top__image"></div>
    </section>
  )
}

export default Top
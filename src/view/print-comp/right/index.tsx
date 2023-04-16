import lang from '../../../data/lang'
import { useLangStore } from '../../../hooks/lang-state'
import locationIcon from '../../../assets/svg/location.svg'
import './style.scss'
import PAbout from '../about'

const Right = () => {
  const { lng } = useLangStore()
  return (
    <div className='p-right'>
      <div className="p-right__fullname">{lang[lng]['Kubatbek Mirzabek']}</div>
      <div className="p-right__job">{lang[lng]['frontend developer']}</div>
      <div className="p-right__location">
        <img
          src={locationIcon}
          alt="location"
          className="p-right__location-icon"
          width={16}
          height={16}
        />
        <div className="p-right__location-text">
          {lang[lng]["Kyrgyzstan, Bishkek"]}
        </div>
      </div>
      <div className="p-title-right">
        {lang[lng]["about"]}
      </div>
      <PAbout />
    </div>
  )
}

export default Right
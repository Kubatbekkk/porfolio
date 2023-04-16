import photo from '../../../assets/img/my-photo-print.png'
import lang from '../../../data/lang'
import { useLangStore } from '../../../hooks/lang-state'
import PContacts from '../contacts'
import PLanguages from '../languages'
import PSkills from '../skills'
import './style.scss'

const Left = () => {
  const { lng } = useLangStore()
  return (
    <div className="p-left">
      <img src={photo} alt="profile-photo" className="p-photo" width="101px" height="117px" />
      <div className="p-title-left">{lang[lng]['contacts']}</div>
      <PContacts />
      <div className="p-title-left">{lang[lng]['languages']}</div>
      <PLanguages />
      <div className="p-title-left">{lang[lng]['skills']}</div>
      <PSkills />
    </div>
  )
}

export default Left
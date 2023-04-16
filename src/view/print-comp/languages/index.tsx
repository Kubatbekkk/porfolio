import './style.scss'
import lang from '../../../data/lang'
import languages from '../../../data/languages'
import { useLangStore } from '../../../hooks/lang-state'

const PLanguages = () => {
  const { lng } = useLangStore()

  return (
    <div className='p-lang'>
      {languages.map((language, i) => (
        <div className='p-lang__item' key={i}>
          <div className="p-lang__name">{lang[lng][language.name]}</div>
          <div className="p-lang__level">{lang[lng][language.level]}</div>
        </div>
      ))}
    </div>
  )
}

export default PLanguages
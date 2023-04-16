import education from "../../../data/education";
import lang from "../../../data/lang";
import { useLangStore } from "../../../hooks/lang-state"
import './style.scss'

const PEducation = () => {
  const { lng } = useLangStore()

  return (
    <div className="p-education">
      {education.map((educ, i) => (
        <div className="p-education__item" key={i}>
          <div className="p-education__year">{lang[lng][educ.year]}</div>
          <div className="p-education__right">
            <div className="p-education__where">{lang[lng][educ.where]}</div>
            <div className="p-education__prof">{lang[lng][educ.profession]}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PEducation
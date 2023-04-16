import './style.scss'
import lang from '../../../data/lang'
import { useLangStore } from '../../../hooks/lang-state'
import courses from '../../../data/courses'

const PCourses = () => {
  const { lng } = useLangStore()

  return (
    <div className='p-courses'>
      {courses.map((course, i) => (
        <div className="p-courses__item" key={i}>
          <div className="p-courses__year">{lang[lng][course.year]}</div>
          <div className="p-courses__right">
            <div className="p-courses__where">{lang[lng][course.where]}</div>
            <div className="p-courses__prof">{lang[lng][course.profession]}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PCourses
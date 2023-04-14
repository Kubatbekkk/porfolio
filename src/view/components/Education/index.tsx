import './style.scss'
import education from '../../../data/education'
import { Fragment } from 'react'
import lang from '../../../data/lang'
import { useLangStore } from '../../../hooks/lang-state'

const Education = () => {
  const { lng } = useLangStore()

  return (
    <section className='education' id='education'>
      <h3 className="education__title">Education</h3>
      <div className="education__list">
        {education.map((ed, i) => (
          <Fragment key={i}>
            <div className="education__year">{ed.year}</div>
            <div className="education__right-wrapper">
              <div className="education__where">
                {lang[lng][ed.where]}
              </div>
              <div className="education__profession">
                {lang[lng][ed.profession]}
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </section>
  )
}

export default Education
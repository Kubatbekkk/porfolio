import { Fragment } from 'react'
import lang from '../../../data/lang'
import languages from '../../../data/languages'
import { useLangStore } from '../../../hooks/lang-state'
import './style.scss'

const Languages = () => {
  const { lng } = useLangStore()

  return (
    <section className='languages' id='languages'>
      <h3 className='languages__title'>languages</h3>
      <div className="languages__list">
        {
          languages.map((language, i) => (
            <Fragment key={i}>
              <p className='languages__lang'>{lang[lng][language.name]}</p>
              <p className="languages__level">{lang[lng][language.level]}</p>
              <div className="languages__points">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i}
                    className={`
                            languages__point ${i <= language.points
                        ? "languages__point_check"
                        : ""}`}
                  />
                ))}
              </div>
            </Fragment>
          ))
        }
      </div>
    </section>
  )
}

export default Languages
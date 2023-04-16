import { Fragment } from "react";
import education from "../../../data/education"
import lang from "../../../data/lang";
import { useLangStore } from "../../../hooks/lang-state"
import './style.scss'

export const Education = () => {
  const { lng } = useLangStore();

  return (
    <section className="education" id="education">
      <h3 className="education__title">{lang[lng]["education"]}</h3>
      <div className="education__list">
        {education.map((educ, i) =>
          <Fragment key={i}>
            <div className="education__year">{educ.year}</div>
            <div className="education__right-wrapper">
              <div className="education__where">{lang[lng][educ.where]}</div>
              <div className="education__profession">{lang[lng][educ.profession]}</div>
            </div>
          </Fragment>
        )}
      </div>
    </section>
  )
}
import { Fragment } from "react";
import lang from "../../../data/lang";
import projects from "../../../data/projects";
import { useLangStore } from "../../../hooks/lang-state"
import './style.scss'

function Projects() {
  const { lng } = useLangStore();

  return (
    <section className="projects" id="projects">
      <h3 className="projects__title">{lang[lng]["projects"]}</h3>
      <div className="projects__list">
        {projects.map((proj, i) =>
          <Fragment key={i}>
            <a className="projects__item" href={proj.url} target="_blank">
              <div className="projects__wrapper">
                <div
                  className="projects__screenshot"
                  style={{ backgroundImage: `url(${proj.screenshot})` }}
                />
                <div className="projects__info">
                  <h4 className="projects__name">{lang[lng][proj.name]}</h4>
                  <p className="projects__description" dangerouslySetInnerHTML={{ __html: lang[lng][proj.description] }}></p>
                  <a className="projects__github" href={proj.gitUrl} target="_blank">
                    <div className="projects__github-icon"></div>
                    <div className="projects__github-wrapper">
                      <p className="projects__github-url">{proj.git}</p>
                    </div>
                  </a>
                </div>
              </div>
            </a>
          </Fragment>
        )}
      </div>
    </section>
  )
}

export default Projects
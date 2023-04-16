import lang from '../../../data/lang'
import projects from '../../../data/projects'
import { useLangStore } from '../../../hooks/lang-state'
import deployIcon from '../../../assets/svg/deploy-print.svg'
import githubIcon from '../../../assets/svg/github-print.svg'
import './style.scss'


const PProjects = () => {
  const { lng } = useLangStore()

  return (
    <div className='p-projects'>
      {projects.filter((proj) => proj.forPrint).map((project, i) => (
        <div className="p-projects__item" key={i}>
          <div className="p-projects__name">{lang[lng][project.name]}</div>
          <div
            className="p-projects__desc"
            dangerouslySetInnerHTML={{ __html: lang[lng][project.shortDescription] }}
          />
          <div className="p-projects__deploy">
            <img src={deployIcon} alt="deploy" className="p-projects__deploy-icon" />
            <div className="p-projects__deploy-text">{project.url.substring(8)}</div>
          </div>
          <div className="p-projects__github">
            <img src={githubIcon} alt="github" className="p-projects__github-icon" />
            <div className="p-projects__github-text">{project.gitUrl.substring(8)}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PProjects
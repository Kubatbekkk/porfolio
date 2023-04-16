import './style.scss'
import skills from '../../../data/skills'

const PSkills = () => {
  return (
    <div className='p-skills'>
      {skills.map((skill) => (
        <div className="p-skills__item" key={skill.id}>
          <img
            src={skill.iconBw}
            alt={skill.name}
            className="p-skills-icon"
            width='16px'
            height='16px'
          />
          <div className="p-skills__name">{skill.name}</div>
        </div>
      ))}
    </div>
  )
}

export default PSkills
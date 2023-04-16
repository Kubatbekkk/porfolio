import './style.scss'
import Top from '../top'
import About from '../about'
import Skills from '../skills'
import Languages from '../languages'
import Courses from '../courses'
import Projects from '../projects'
import { Education } from '../education/education'

const Main = () => {
  return (
    <>
      <Top />
      <About />
      <Skills />
      <Languages />
      <div className="two-blocks">
        <Education />
        <Courses />
      </div>
      <Projects />
    </>
  )
}

export default Main
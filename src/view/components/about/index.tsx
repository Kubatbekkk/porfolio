import './style.scss';
import lang from '../../../data/lang';
import { useLangStore } from '../../../hooks/lang-state';


const About = () => {
  const { lng } = useLangStore()
  return (
    <section className='about' id='about'>
      <h3 className='about__title'>{lang[lng]['about']}</h3>
      <div className="about__wrapper">
        <p dangerouslySetInnerHTML={{ __html: lang[lng]["about1"] }} />
        <p dangerouslySetInnerHTML={{ __html: lang[lng]["about2"] }} />
        <p dangerouslySetInnerHTML={{ __html: lang[lng]["about3"] }} />
        <p dangerouslySetInnerHTML={{ __html: lang[lng]["about4"] }} />
      </div>
    </section>
  )
}

export default About
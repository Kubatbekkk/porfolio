import './style.scss'
import lang from '../../../data/lang'
import { trans, useLangStore } from '../../../hooks/lang-state'
import { usePopMenuStore } from '../../../hooks/pop-up-state'

const Header = () => {
  const { showPopMenu } = usePopMenuStore()
  const { lng, setRu, setEn } = useLangStore()

  return (
    <header className='header'>
      <button className="header__menu" onClick={showPopMenu} />
      <nav className="header__left">
        <ul className="header__links">
          <li className="header__link">
            <a href="#about">{lang[lng]["about"]}</a>
          </li>
          <li className="header__link">
            <a href="#skills">{lang[lng]["skills"]}</a>
          </li>
          <li className="header__link">
            <a href="#languages">{lang[lng]["languages"]}</a>
          </li>
          <li className="header__link">
            <a href="#education">{lang[lng]["education"]}</a>
          </li>
          <li className="header__link">
            <a href="#courses">{lang[lng]["courses"]}</a>
          </li>
          <li className="header__link">
            <a href="#projects">{lang[lng]["projects"]}</a>
          </li>
        </ul>
      </nav>
      <ul className="header__right">
        <li className="header__ru">
          {lng == trans.ru ? <div>ru</div> : <a onClick={setRu}>ru</a>}
        </li>
        <li className="header__en">
          {lng == trans.en ? <div>en</div> : <a onClick={setEn}>en</a>}
        </li>
        <button className="header__print"></button>
      </ul>
    </header>
  )
}

export default Header
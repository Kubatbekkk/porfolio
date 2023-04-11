import './style.scss'

const Header = () => {
  return (
    <header className='header'>
      <button className="header__menu" />
      <nav className="header__left">
        <ul className="header__links">
          <li className="header__link">
            <a href="#about">about</a>
          </li>
          <li className="header__link">
            <a href="#skills">skills</a>
          </li>
          <li className="header__link">
            <a href="#languages">languages</a>
          </li>
          <li className="header__link">
            <a href="#education">education</a>
          </li>
          <li className="header__link">
            <a href="#courses">courses</a>
          </li>
          <li className="header__link">
            <a href="#projects">projects</a>
          </li>
        </ul>
      </nav>
      <ul className="header__right">
        <li className="header__ru">
          <a href="">ru</a>
        </li>
        <li className="header__en">
          <a href="">en</a>
        </li>
        <button className="header__print"></button>
      </ul>
    </header>
  )
}

export default Header
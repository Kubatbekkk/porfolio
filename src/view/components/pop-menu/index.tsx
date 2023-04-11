import './style.scss'
import { usePopMenuStore } from '../../../hooks/pop-up-state'

const PopMenu = () => {
  const { isShowing, hidePopMenu } = usePopMenuStore()

  return (
    <aside className='pop-menu' id='pop' style={{ left: isShowing ? 0 : '-100%' }}>
      <nav className="pop-menu__nav">
        <ul className="pop-menu__links">
          <li className="pop-menu__close">
            <button className="pop-menu__close-btn" onClick={hidePopMenu} />
          </li>
          <li className="pop-menu__link" onClick={hidePopMenu}>
            <a href="#about">about</a>
          </li>
          <li className="pop-menu__link" onClick={hidePopMenu}>
            <a href="#languages">languages</a>
          </li>
          <li className="pop-menu__link" onClick={hidePopMenu}>
            <a href="#education">education</a>
          </li>
          <li className="pop-menu__link" onClick={hidePopMenu}>
            <a href="#courses">courses</a>
          </li>
          <li className="pop-menu__link" onClick={hidePopMenu}>
            <a href="#projects">projects</a>
          </li>
          <li className="pop-menu__link" onClick={hidePopMenu}>
            <a href="#skills">skills</a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default PopMenu
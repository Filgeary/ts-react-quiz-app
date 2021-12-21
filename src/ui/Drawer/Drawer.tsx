import React from 'react'
import cls from './Drawer.module.css'
import Backdrop from '../Backdrop/Backdrop'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Quiz List' },
  { to: '/auth', label: 'Auth' },
  { to: '/quiz-creator', label: 'Quiz Creator' },
]

type Props = {
  isMenuOpen: boolean
  onClickBackdrop: () => void
}

const Drawer = (props: Props) => {
  const { isMenuOpen, onClickBackdrop } = props
  const classes = [cls.wrapper]
  if (!isMenuOpen) classes.push(cls.close)

  const activeStyle = { color: '#7969e6' }
  const notActiveStyle = { color: '#363d54' }

  const handleClickCloseMenu = (): void => onClickBackdrop()

  return (
    <>
      <nav className={classes.join(' ')}>
        <ul className={cls.list}>
          {links.map((link, idx) => {
            return (
              <li key={idx} className={cls.listItem}>
                <NavLink
                  to={link.to}
                  className={cls.link}
                  style={({ isActive }) =>
                    isActive ? activeStyle : notActiveStyle
                  }
                  onClick={handleClickCloseMenu}
                >
                  {link.label}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>

      {isMenuOpen && <Backdrop onClickBackdrop={onClickBackdrop} />}
    </>
  )
}

export default Drawer

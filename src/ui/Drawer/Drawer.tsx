import React, { useEffect, useRef } from 'react'
import cls from './Drawer.module.css'
import Backdrop from '../Backdrop/Backdrop'
import { NavLink } from 'react-router-dom'

type Props = {
  isAuth: boolean
  isMenuOpen: boolean
  onClickBackdrop: () => void
}

const Drawer = (props: Props) => {
  const { isAuth, isMenuOpen, onClickBackdrop } = props
  const links = useRef<Record<'to' | 'label', string>[]>()

  useEffect(() => {
    if (isAuth) {
      links.current = [
        { to: '/', label: 'Home' },
        { to: '/quizzes', label: 'Start Quiz' },
        { to: '/quiz-creator', label: 'Quiz Creator' },
        { to: '/logout', label: 'Logout' },
      ]
    } else {
      links.current = [
        { to: '/', label: 'Home' },
        { to: '/quizzes', label: 'Start Quiz' },
        { to: '/login', label: 'Login' },
      ]
    }
  }, [isAuth])
  const classes = [cls.wrapper]
  if (!isMenuOpen) classes.push(cls.close)

  const activeStyle = { color: '#7969e6' }
  const notActiveStyle = { color: '#363d54' }

  const handleClickCloseMenu = (): void => onClickBackdrop()

  return (
    <>
      <nav className={classes.join(' ')}>
        <ul className={cls.list}>
          {links.current &&
            links.current.map((link, idx) => {
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

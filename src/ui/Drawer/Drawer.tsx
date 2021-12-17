import React from 'react'
import cls from './Drawer.module.css'

// TODO: replace links
const links = ['home', 'link-1', 'link-2']

type Props = {
  isMenuOpen: boolean
}

const Drawer = (props: Props) => {
  const { isMenuOpen } = props
  const classes = [cls.wrapper]
  if (!isMenuOpen) classes.push(cls.close)

  return (
    <nav className={classes.join(' ')}>
      <ul className={cls.list}>
        {links.map((link, idx) => {
          return (
            <li key={idx} className={cls.listItem}>
              <a href={`/${link}`} className={cls.link}>
                {link.toUpperCase()}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Drawer

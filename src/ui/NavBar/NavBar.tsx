import React, { useState } from 'react'
import cls from './NavBar.module.css'
import MenuToggle from '../MenuToggle/MenuToggle'
import Drawer from '../Drawer/Drawer'

interface Props {
  isAuth: boolean
}

const NavBar = ({ isAuth }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleToggleMenu = (): void => setIsMenuOpen(!isMenuOpen)
  const handleClickBackdrop = (): void => setIsMenuOpen(false)
  const handleKeyEscape = (evt: React.KeyboardEvent<HTMLDivElement>): void => {
    if (isMenuOpen && evt?.key === 'Escape') {
      setIsMenuOpen(false)
    }
  }

  return (
    <div className={cls.wrapper} onKeyDown={handleKeyEscape}>
      <MenuToggle isMenuOpen={isMenuOpen} onToggleMenu={handleToggleMenu} />
      <Drawer
        isAuth={isAuth}
        isMenuOpen={isMenuOpen}
        onClickBackdrop={handleClickBackdrop}
      />
    </div>
  )
}

export default NavBar

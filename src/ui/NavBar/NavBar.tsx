import React, { useState } from 'react'
import cls from './NavBar.module.css'
import MenuToggle from '../MenuToggle/MenuToggle'
import Drawer from '../Drawer/Drawer'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleToggleMenu = (): void => setIsMenuOpen(!isMenuOpen)

  return (
    <div className={cls.wrapper}>
      <MenuToggle isMenuOpen={isMenuOpen} onToggleMenu={handleToggleMenu} />
      <Drawer isMenuOpen={isMenuOpen} />
    </div>
  )
}

export default NavBar

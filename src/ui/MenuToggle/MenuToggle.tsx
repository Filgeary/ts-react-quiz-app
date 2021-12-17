import React from 'react'
import cls from './MenuToggle.module.css'
import Button from '../Button/Button'

type Props = {
  isMenuOpen: boolean
  onToggleMenu: () => void
}

const MenuToggle = (props: Props) => {
  const { isMenuOpen, onToggleMenu } = props

  return (
    <Button
      onClickButton={onToggleMenu}
      variant={isMenuOpen ? 'error' : 'primary'}
      cssStyles={cls.toggle}
    >
      {isMenuOpen ? 'Close ❎' : 'Menu ⬇'}
    </Button>
  )
}

export default MenuToggle

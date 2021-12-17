import React from 'react'
import cls from './Button.module.css'

type ButtonProps = {
  children: React.ReactNode
  onClickButton: () => void
  type: 'primary' | 'success' | 'error'
  isDisabled?: boolean
}

const Button = (props: ButtonProps) => {
  const { children, onClickButton, type, isDisabled } = props
  const classes = [cls.btn, cls[type]]

  return (
    <button
      type={'button'}
      className={classes.join(' ')}
      onClick={onClickButton}
      disabled={isDisabled}
    >
      {children}
    </button>
  )
}

export default Button

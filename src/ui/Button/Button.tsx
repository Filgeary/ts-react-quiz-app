import React from 'react'
import cls from './Button.module.css'

type ButtonProps = {
  children: React.ReactNode
  onClickButton: () => void
  variant: 'primary' | 'success' | 'error'
  isDisabled?: boolean
  cssStyles?: string
}

const Button = (props: ButtonProps) => {
  const { children, onClickButton, variant, isDisabled, cssStyles } = props
  const classes = [cls.btn, cls[variant], cssStyles]

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

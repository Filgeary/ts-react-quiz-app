import React, { useEffect, useRef } from 'react'
import cls from './Input.module.css'

type Props = {
  type: 'text' | 'email' | 'password' | string
  label: string
  value: string
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void
  isValid: boolean
  isTouched: boolean
  shouldValidate?: boolean
  errorMessage?: string
  isFocus?: boolean
}

const isInvalid = ({ isValid, isTouched, shouldValidate }: Partial<Props>) => {
  return !isValid && isTouched && shouldValidate
}

const Input = (props: Props) => {
  const {
    type,
    label,
    value,
    onChange,
    errorMessage = 'Enter a correct value!',
    isFocus,
  } = props
  const classes = [cls.wrapper]
  const htmlForValue = `${type}-${Math.random().toFixed(5)}`
  const refInput = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (isFocus) refInput.current?.focus()
  }, [isFocus])

  if (isInvalid(props)) classes.push(cls.invalid)

  return (
    <div className={classes.join(' ')}>
      <label htmlFor={htmlForValue}>{label}</label>
      <input
        type={type}
        id={htmlForValue}
        value={value}
        onChange={onChange}
        ref={refInput}
      />

      {isInvalid(props) && <span>{errorMessage}</span>}
    </div>
  )
}

export default Input

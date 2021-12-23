import React from 'react'
import cls from './Input.module.css'

type Props = {
  inputType: 'text' | 'email' | 'password' | string
  label: string
  value: string
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void
  isValid: boolean
  isTouched: boolean
  shouldValidate?: boolean
  errorMessage?: string
}

const isInvalid = ({ isValid, isTouched, shouldValidate }: Partial<Props>) => {
  return !isValid && isTouched && shouldValidate
}

const Input = (props: Props) => {
  const {
    inputType,
    label,
    value,
    onChange,
    errorMessage = 'Enter a correct value!',
  } = props
  const classes = [cls.wrapper]
  const htmlForValue = `${inputType}-${Math.random().toFixed(5)}`

  if (isInvalid(props)) classes.push(cls.invalid)

  return (
    <div className={classes.join(' ')}>
      <label htmlFor={htmlForValue}>{label}</label>
      <input
        type={inputType}
        id={htmlForValue}
        value={value}
        onChange={onChange}
      />

      {isInvalid(props) && <span>{errorMessage}</span>}
    </div>
  )
}

export default Input

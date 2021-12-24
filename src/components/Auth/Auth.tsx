import React, { useState } from 'react'
import cls from './Auth.module.css'
import Button from '../../ui/Button/Button'
import Input from '../../ui/Input/Input'
import { IInputControl } from '../../typings'
import { isValidEmail } from '../../utils'

type ChangeEvent = React.ChangeEvent<HTMLInputElement>
type FormEvent = React.FormEvent<HTMLFormElement>
type ValidateInput = Pick<IInputControl, 'value' | 'validation'>

const Auth = () => {
  const [emailInput, setEmailInput] = useState<IInputControl>({
    type: 'email',
    label: 'Email',
    value: '',
    errorMessage: 'Enter a correct Email',
    isValid: false,
    isTouched: false,
    validation: {
      isRequired: true,
      options: {
        isEmail: true,
      },
    },
  })

  const [passwordInput, setPasswordInput] = useState<IInputControl>({
    type: 'password',
    label: 'Password',
    value: '',
    errorMessage: 'Enter a correct Password',
    isValid: false,
    isTouched: false,
    validation: {
      isRequired: true,
      options: {
        minLength: 6,
      },
    },
  })

  const validateInput = ({ value, validation }: ValidateInput) => {
    if (!validation) return true

    let isValid = true

    if (validation.isRequired) {
      isValid = value.trim() !== '' && isValid
    }
    if (validation.options?.isEmail) {
      isValid = isValidEmail(value) && isValid
    }
    if (validation.options?.minLength) {
      isValid = value.trim().length >= validation.options.minLength
    }

    return isValid
  }

  const handleLogin = (): void => {}

  const handleRegister = (): void => {}

  const handleSubmit = (evt: FormEvent): void => {
    evt.preventDefault()
  }

  const handleChange = (evt: ChangeEvent, controlName: string): void => {
    switch (controlName) {
      case 'email':
        setEmailInput(prevState => ({
          ...prevState,
          value: evt.target.value,
          isTouched: true,
          isValid: validateInput({
            value: evt.target.value,
            validation: emailInput.validation,
          }),
        }))
        break
      case 'password':
        setPasswordInput(prevState => ({
          ...prevState,
          value: evt.target.value,
          isTouched: true,
          isValid: validateInput({
            value: evt.target.value,
            validation: passwordInput.validation,
          }),
        }))
        break
      default:
        return
    }
  }

  const renderControls = (...args: IInputControl[]) => {
    return args.map((control, idx) => {
      return (
        <Input
          key={control.type + idx}
          type={control.type}
          label={control.label}
          value={control.value}
          onChange={evt => handleChange(evt, control.type)}
          isValid={control.isValid}
          isTouched={control.isTouched}
          shouldValidate={control.validation.isRequired}
          errorMessage={control.errorMessage}
        />
      )
    })
  }
  const inputControls = renderControls(emailInput, passwordInput)

  return (
    <div className={cls.wrapper}>
      <h2 className={cls.heading}>Login Form</h2>

      <form className={cls.form} onSubmit={handleSubmit}>
        {inputControls}

        <div className={cls.controlsWrapper}>
          <Button onClickButton={handleLogin} variant={'success'}>
            Login
          </Button>
          <Button
            onClickButton={handleRegister}
            variant={'primary'}
            cssStyles={cls.controlRegister}
          >
            Register
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Auth

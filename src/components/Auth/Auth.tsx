import React, { useEffect, useState } from 'react'
import cls from './Auth.module.css'
import Button from '../../ui/Button/Button'
import Input from '../../ui/Input/Input'
import { IInputControl } from '../../typings'
import { validateForm, validateInput } from '../../utils'
import { FbLogInRequest, FbSignUpRequest } from '../../typings/fbAuthTypes'
import { useNavigate } from 'react-router-dom'
import { AppRoute } from '../../constants'

type ChangeEvent = React.ChangeEvent<HTMLInputElement>
type FormEvent = React.FormEvent<HTMLFormElement>

type Props = {
  isAuth: boolean
  onSignUp: (data: FbSignUpRequest) => void
  onLogin: (data: FbLogInRequest) => void
}

const Auth = (props: Props) => {
  const { isAuth, onSignUp, onLogin } = props
  const navigate = useNavigate()
  useEffect(() => {
    if (isAuth) navigate(AppRoute.HOME)
  }, [isAuth, navigate])

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
  const [isValidForm, setIsValidForm] = useState(false)

  // check form validation
  useEffect(() => {
    setIsValidForm(() => validateForm(emailInput, passwordInput))
  }, [emailInput, passwordInput])

  const setFormConfig = (): FbSignUpRequest | FbLogInRequest => ({
    email: emailInput.value,
    password: passwordInput.value,
    returnSecureToken: true,
  })

  const clearForm = () => {
    setEmailInput(prevState => ({
      ...prevState,
      value: '',
      isValid: false,
      isTouched: false,
    }))

    setPasswordInput(prevState => ({
      ...prevState,
      value: '',
      isValid: false,
      isTouched: false,
    }))
  }

  const handleLogin = (): void => {
    const config = setFormConfig()
    onLogin(config)
    clearForm()
  }

  const handleRegister = (): void => {
    const config = setFormConfig()
    onSignUp(config)
    clearForm()
  }

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

  const renderControls = (...controls: IInputControl[]) => {
    return controls.map((control, idx) => {
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
    <>
      <h2 className={cls.heading}>Login Form</h2>

      <form className={cls.form} onSubmit={handleSubmit}>
        {inputControls}

        <div className={cls.controlsWrapper}>
          <Button
            onClickButton={handleLogin}
            variant={'success'}
            isDisabled={!isValidForm}
          >
            Login
          </Button>
          <Button
            onClickButton={handleRegister}
            variant={'primary'}
            cssStyles={cls.controlRegister}
            isDisabled={!isValidForm}
          >
            Register
          </Button>
        </div>
      </form>
    </>
  )
}

export default Auth

import React from 'react'
import cls from './Auth.module.css'
import Button from '../../ui/Button/Button'
import Input from '../../ui/Input/Input'

type ChangeEvent = React.ChangeEvent<HTMLInputElement>

const Auth = () => {
  const handleLogin = (): void => {}

  const handleRegister = (): void => {}

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault()
  }

  const handleChangeEmail = (evt: ChangeEvent): void => {
    console.log(evt.target.value)
  }
  const handleChangePassword = (evt: ChangeEvent): void => {
    console.log(evt.target.value)
  }

  return (
    <div className={cls.wrapper}>
      <h2 className={cls.heading}>Login Form</h2>

      <form className={cls.form} onSubmit={handleSubmit}>
        <Input
          inputType={'email'}
          label={'Email'}
          value={''}
          onChange={handleChangeEmail}
          isValid={true}
          isTouched={false}
          shouldValidate={true}
        />
        <Input
          inputType={'password'}
          label={'Password'}
          value={''}
          onChange={handleChangePassword}
          isValid={true}
          isTouched={false}
          shouldValidate={true}
        />

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

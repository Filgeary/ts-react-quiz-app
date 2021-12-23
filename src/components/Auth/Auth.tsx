import React from 'react'
import cls from './Auth.module.css'
import Button from '../../ui/Button/Button'

const Auth = () => {
  const handleLogin = (): void => {}

  const handleRegister = (): void => {}

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault()
  }

  return (
    <div className={cls.wrapper}>
      <h2 className={cls.heading}>Login Form</h2>

      <form className={cls.form} onSubmit={handleSubmit}>
        <input type='text' />
        <input type='text' />

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

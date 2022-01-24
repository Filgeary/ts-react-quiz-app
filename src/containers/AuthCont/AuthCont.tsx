import React from 'react'
import cls from './AuthCont.module.css'
import Auth from '../../components/Auth/Auth'
import { useLoginMutation, useSignupMutation } from '../../services/authService'
import { FbLogInRequest, FbSignUpRequest } from '../../typings/fbAuthTypes'
import { useAppSelector } from '../../hooks/hooks'
import { selectIsAuth } from '../../store/slices/authSlice'

const AuthCont = () => {
  const isAuth = useAppSelector(selectIsAuth)
  const [
    signup,
    {
      data: signupData,
      error: signupError,
      isLoading: isSignupPending,
      reset: resetSignup,
    },
  ] = useSignupMutation()
  const [
    login,
    {
      data: loginData,
      error: loginError,
      isLoading: isLoginPending,
      reset: resetLogin,
    },
  ] = useLoginMutation()

  const handleSignUp = (data: FbSignUpRequest) => {
    resetSignup()
    resetLogin()
    signup(data)
  }
  const handleLogin = (data: FbLogInRequest) => {
    resetLogin()
    resetSignup()
    login(data)
  }

  return (
    <div className={cls.wrapper}>
      <Auth isAuth={isAuth} onSignUp={handleSignUp} onLogin={handleLogin} />

      <p>
        {isSignupPending || isLoginPending
          ? 'Pending...'
          : signupError
          ? // @ts-ignore
            JSON.stringify(signupError.data?.error?.message, null, 2)
          : loginError
          ? // @ts-ignore
            JSON.stringify(loginError.data?.error?.message, null, 2)
          : signupData || loginData
          ? 'OK'
          : ''}
      </p>
    </div>
  )
}

export default AuthCont

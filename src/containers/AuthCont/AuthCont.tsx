import React, { useState } from 'react'
import cls from './AuthCont.module.css'
import Auth from '../../components/Auth/Auth'
import {
  FbLogInRequest,
  FbLogInResponse,
  FbSignUpRequest,
  FbSignUpResponse,
} from '../../typings/fbAuthTypes'
import { logIn, signUp } from '../../services/authApi'

const AuthCont = () => {
  const [signUpRes, setSignUpRes] = useState<FbSignUpResponse | null>(null)
  const [loginRes, setLoginRes] = useState<FbLogInResponse | null>(null)
  const [isPending, setIsPending] = useState(false)
  const [isError, setIsError] = useState(false)

  const handleSignUpResLoaded = (data: FbSignUpResponse): void => {
    setIsPending(false)
    setIsError(false)
    setSignUpRes(data)
  }

  const handleLoginResLoaded = (data: FbLogInResponse): void => {
    setIsPending(false)
    setIsError(false)
    setLoginRes(data)
  }

  const handleError = (err: any) => {
    setIsPending(false)
    setIsError(true)
    console.error(err)
  }

  const handleSignUp = (data: FbSignUpRequest): void => {
    signUp(data)
      .then(res => handleSignUpResLoaded(res.data))
      .catch(err => handleError(err))
  }

  const handleLogin = (data: FbLogInRequest): void => {
    logIn(data)
      .then(res => handleLoginResLoaded(res.data))
      .catch(err => handleError(err))
  }

  // TODO
  console.log(signUpRes, loginRes, isPending, isError)

  return (
    <div className={cls.wrapper}>
      <Auth onSignUp={handleSignUp} onLogin={handleLogin} />
    </div>
  )
}

export default AuthCont

import React, { useEffect, useState } from 'react'
import Layout from '../ui/Layout/Layout'
import QuizCont from '../containers/QuizCont/QuizCont'
import NavBarCont from '../containers/NavBarCont/NavBarCont'
import { Route, Routes } from 'react-router-dom'
import WelcomeScreen from '../components/WelcomeScreen/WelcomeScreen'
import AuthCont from '../containers/AuthCont/AuthCont'
import QuizCreatorCont from '../containers/QuizCreatorCont/QuizCreatorCont'
import { LogoLink } from '../ui/LogoLink/LogoLink'
import { AppRoute } from '../constants'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import {
  autoLogin,
  clearAuthLocalStorage,
  logout,
  selectIsAuth,
  selectUserEmail,
} from '../store/slices/authSlice'
import { formatTimeDuration } from '../utils/formatTimeDuration'
import LogoutCont from '../containers/LogoutCont/LogoutCont'

const App = () => {
  const [authTime, setAuthTime] = useState('')
  const isAuth = useAppSelector(selectIsAuth)
  const userEmail = useAppSelector(selectUserEmail)
  const dispatch = useAppDispatch()

  // TODO: add custom Hook?
  useEffect(() => {
    const idToken = localStorage.getItem('idToken')
    const email = localStorage.getItem('email')
    const localId = localStorage.getItem('localId')
    let expirationDate = 0
    let timeRemaining = 0
    let prettyDate: string | undefined = ''

    if (!idToken) {
      dispatch(logout())
      dispatch(clearAuthLocalStorage())
    } else {
      expirationDate = Number(localStorage.getItem('expirationDate'))
      timeRemaining = expirationDate - new Date().getTime()
      prettyDate = formatTimeDuration(timeRemaining, false)
      if (prettyDate) setAuthTime(prettyDate)

      if (expirationDate && timeRemaining <= 0) {
        dispatch(logout())
        dispatch(clearAuthLocalStorage())
      } else {
        if (email && localId) {
          dispatch(autoLogin({ idToken, email, localId }))
        }
      }
    }
    let timerId = setInterval(() => {
      if (isAuth) {
        timeRemaining = expirationDate - new Date().getTime()
        if (timeRemaining <= 180000) {
          dispatch(logout())
          dispatch(clearAuthLocalStorage())
        } else {
          prettyDate = formatTimeDuration(timeRemaining, false)
          if (prettyDate) setAuthTime(prettyDate)
        }
      }
    }, 30000)

    return () => clearInterval(timerId)
  }, [dispatch, isAuth])

  return (
    <Layout>
      <header>
        <LogoLink title={'TS React Quiz app'} />
        <p>Account: {userEmail || 'Guest'}</p>
        {isAuth && authTime && <small>Time Auth Remaining: {authTime}</small>}
        <NavBarCont />
      </header>

      <main>
        <Routes>
          <Route path={AppRoute.HOME} element={<WelcomeScreen />} />
          <Route path={AppRoute.QUIZZES} element={<QuizCont />} />
          <Route path={AppRoute.LOGIN} element={<AuthCont />} />

          {isAuth && (
            <>
              <Route
                path={AppRoute.QUIZ_CREATOR}
                element={<QuizCreatorCont />}
              />
              <Route path={AppRoute.LOGOUT} element={<LogoutCont />} />
            </>
          )}
        </Routes>
      </main>
    </Layout>
  )
}

export default App

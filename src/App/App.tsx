import React, { useEffect } from 'react'
import Layout from '../ui/Layout/Layout'
import QuizCont from '../containers/QuizCont/QuizCont'
import NavBar from '../ui/NavBar/NavBar'
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
  selectUserEmail,
} from '../store/slices/authSlice'

const App = () => {
  const userEmail = useAppSelector(selectUserEmail)
  const dispatch = useAppDispatch()

  // TODO: add custom Hook?
  useEffect(() => {
    const idToken = localStorage.getItem('idToken')
    const email = localStorage.getItem('email')
    const localId = localStorage.getItem('localId')

    if (!idToken) {
      dispatch(logout())
      dispatch(clearAuthLocalStorage())
    } else {
      const expirationDate = Number(localStorage.getItem('expirationDate'))
      const timeRemaining = expirationDate - new Date().getTime()

      if (expirationDate && timeRemaining <= 0) {
        dispatch(logout())
        dispatch(clearAuthLocalStorage())
      } else {
        if (email && localId) {
          dispatch(autoLogin({ idToken, email, localId }))
        }
      }
    }
  }, [dispatch])

  return (
    <Layout>
      <header>
        <LogoLink title={'TS React Quiz app'} />
        <p>Account: {userEmail || 'Guest'}</p>
        <NavBar />
      </header>

      <main>
        <Routes>
          <Route path={AppRoute.HOME} element={<WelcomeScreen />} />
          <Route path={AppRoute.LOGIN} element={<AuthCont />} />
          <Route path={AppRoute.QUIZZES} element={<QuizCont />} />
          <Route path={AppRoute.QUIZ_CREATOR} element={<QuizCreatorCont />} />
        </Routes>
      </main>
    </Layout>
  )
}

export default App

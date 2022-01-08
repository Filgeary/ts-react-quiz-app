import React from 'react'
import Layout from '../ui/Layout/Layout'
import QuizCont from '../containers/QuizCont/QuizCont'
import NavBar from '../ui/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import WelcomeScreen from '../components/WelcomeScreen/WelcomeScreen'
import Auth from '../components/Auth/Auth'
import QuizCreatorCont from '../containers/QuizCreatorCont/QuizCreatorCont'
import { LogoLink } from '../ui/LogoLink/LogoLink'
import { AppRoute } from '../constants'

const App = () => (
  <Layout>
    <header>
      <LogoLink title={'TS React Quiz app'} />
      <NavBar />
    </header>

    <main>
      <Routes>
        <Route path={AppRoute.HOME} element={<WelcomeScreen />} />
        <Route path={AppRoute.LOGIN} element={<Auth />} />
        <Route path={AppRoute.QUIZZES} element={<QuizCont />} />
        <Route path={AppRoute.QUIZ_CREATOR} element={<QuizCreatorCont />} />
      </Routes>
    </main>
  </Layout>
)

export default App

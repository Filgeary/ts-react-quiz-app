import React from 'react'
import Layout from '../ui/Layout/Layout'
import Quiz from '../components/Quiz/Quiz'
import { IQuiz } from '../models'
import { _mockQuizzes } from '../_mocks/_mockQuizzes'
import NavBar from '../ui/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import WelcomeScreen from '../components/WelcomeScreen/WelcomeScreen'
import Auth from '../components/Auth/Auth'
import QuizCreator from '../components/QuizCreator/QuizCreator'
import { LogoLink } from '../ui/LogoLink/LogoLink'

const quizzesData: IQuiz[] = _mockQuizzes

const App = () => (
  <Layout>
    <header>
      <LogoLink title={'TS React Quiz app'} />
      <NavBar />
    </header>

    <main>
      <Routes>
        <Route path='/' element={<WelcomeScreen />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/quiz/:id' element={<Quiz data={quizzesData} />} />
        <Route path='/quiz-creator' element={<QuizCreator />} />
      </Routes>
    </main>
  </Layout>
)

export default App

import React from 'react'
import Layout from '../ui/Layout/Layout'
import Quiz from '../components/Quiz/Quiz'
import { IQuiz } from '../models'
import { _mockQuizzes } from '../_mocks/_mockQuizzes'
import NavBar from '../ui/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import QuizList from '../components/QuizList/QuizList'
import Auth from '../components/Auth/Auth'
import QuizCreator from '../components/QuizCreator/QuizCreator'

const quizzesData: IQuiz[] = _mockQuizzes

const App = () => (
  <Layout>
    <header>
      <h1>TS React Quiz app</h1>
      <NavBar />
    </header>

    <main>
      <Routes>
        <Route path='/' element={<QuizList />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/quiz/:id' element={<Quiz data={quizzesData} />} />
        <Route path='/quiz-creator' element={<QuizCreator />} />
      </Routes>
    </main>
  </Layout>
)

export default App

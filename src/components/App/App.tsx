import React from 'react'
import Layout from '../../ui/Layout/Layout'
import Quiz from '../Quiz/Quiz'
import { IQuiz } from '../../models'
import { _mockQuizzes } from '../../_mocks/_mockQuizzes'

const quizzesData: IQuiz[] = _mockQuizzes

const App = () => (
  <Layout>
    <h1>TS React Quiz app</h1>

    <Quiz data={quizzesData} />
  </Layout>
)

export default App

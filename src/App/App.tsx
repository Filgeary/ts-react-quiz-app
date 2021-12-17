import React from 'react'
import Layout from '../ui/Layout/Layout'
import Quiz from '../components/Quiz/Quiz'
import { IQuiz } from '../models'
import { _mockQuizzes } from '../_mocks/_mockQuizzes'

const quizzesData: IQuiz[] = _mockQuizzes

const App = () => (
  <Layout>
    <h1>TS React Quiz app</h1>

    <main>
      <Quiz data={quizzesData} />
    </main>
  </Layout>
)

export default App

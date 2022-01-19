import React from 'react'
import cls from './QuizCont.module.css'
import Spinner from '../../components/Spinner/Spinner'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import Quiz from '../../components/Quiz/Quiz'
import { adaptQuizToClient } from '../../services/adapter'
import { useGetAllQuizzesQuery } from '../../services/quizService'

const QuizCont = () => {
  const { data: quizList, error, isLoading } = useGetAllQuizzesQuery()
  if (error) console.error(error)

  return (
    <div className={cls.wrapper}>
      {isLoading && <Spinner />}
      {error && <ErrorMessage />}
      {!quizList && !error && !isLoading ? (
        <p style={{ textAlign: 'center' }}>No Data...</p>
      ) : null}
      {quizList && !error && !isLoading ? (
        <Quiz data={adaptQuizToClient(quizList)} />
      ) : null}
    </div>
  )
}

export default QuizCont

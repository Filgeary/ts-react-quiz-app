import React, { useEffect, useState } from 'react'
import cls from './QuizCont.module.css'
import { IQuiz, QuizRecordData } from '../../models'
import Spinner from '../../components/Spinner/Spinner'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import Quiz from '../../components/Quiz/Quiz'
import { adaptQuizToClient } from '../../services/adapter'
import { getAllQuizzes } from '../../services/api'

const QuizCont = () => {
  const [quizList, setQuizList] = useState<IQuiz[] | null | undefined>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [isEmptyData, setIsEmptyData] = useState(false)

  const handleQuizzesLoaded = (data: QuizRecordData): void => {
    setIsLoading(false)

    if (!data) {
      setIsEmptyData(true)
    } else {
      setIsEmptyData(false)
      setIsError(false)
      setQuizList(() => adaptQuizToClient(data))
    }
  }

  const handleError = (err: any): void => {
    setIsLoading(false)
    setIsEmptyData(false)
    setIsError(true)
    console.error(err)
  }

  useEffect(() => {
    getAllQuizzes()
      .then(result => handleQuizzesLoaded(result.data))
      .catch(err => handleError(err))
  }, [])

  return (
    <div className={cls.wrapper}>
      {isLoading && <Spinner />}
      {isError && <ErrorMessage />}
      {isEmptyData && <p style={{ textAlign: 'center' }}>No Data...</p>}
      {quizList && !isError ? <Quiz data={quizList} /> : null}
    </div>
  )
}

export default QuizCont

import React, { useEffect, useState } from 'react'
import cls from './QuizCreatorCont.module.css'
import QuizCreator from '../../components/QuizCreator/QuizCreator'
import { IQuizServer, PostResponse } from '../../models'
import { getAllQuizzes, postQuiz } from '../../services/api'
import Spinner from '../../components/Spinner/Spinner'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import Button from '../../ui/Button/Button'

const QuizCreatorCont = () => {
  const [postResponse, setPostResponse] = useState<PostResponse[] | null>(null)
  const [isPosting, setIsPosting] = useState(false)
  const [isErrorPosting, setIsErrorPosting] = useState(false)

  // get Total count of All Quizzes
  const [quizzesTotalCount, setQuizzesTotalCount] = useState(1)
  const syncQuizzesTotalCount = (): void => {
    getAllQuizzes()
      .then(res =>
        setQuizzesTotalCount(res.data ? Object.keys(res.data).length + 1 : 1),
      )
      .catch(err => console.error(err))
  }
  useEffect(() => {
    syncQuizzesTotalCount()
  }, [])

  const handlePostResponseLoaded = (response: PostResponse[]): void => {
    setIsPosting(false)
    setIsErrorPosting(false)
    setPostResponse(response)
  }

  const handlePostError = (err: any): void => {
    setIsPosting(false)
    setIsErrorPosting(true)
    console.error(err)
  }

  const handlePostQuizData = (data: IQuizServer[]): void => {
    setIsPosting(true)

    postQuiz(data)
      .then(res => handlePostResponseLoaded(res))
      .catch(err => handlePostError(err))
  }

  const handleRetryAgain = (): void => {
    setPostResponse(null)
    syncQuizzesTotalCount()
  }

  return (
    <div className={cls.wrapper}>
      {isPosting && <Spinner />}
      {isErrorPosting && <ErrorMessage />}
      {postResponse && !isErrorPosting ? (
        <>
          <p>OK! Your Data have saved.</p>
          <Button onClickButton={handleRetryAgain} variant={'success'}>
            Add other Quiz
          </Button>
        </>
      ) : null}
      {!postResponse && !isErrorPosting ? (
        <QuizCreator
          quizzesTotalCount={quizzesTotalCount}
          onPostQuizData={handlePostQuizData}
        />
      ) : null}
    </div>
  )
}

export default QuizCreatorCont

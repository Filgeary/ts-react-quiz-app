import React, { useEffect, useState } from 'react'
import cls from './QuizCreatorCont.module.css'
import QuizCreator from '../../components/QuizCreator/QuizCreator'
import { IQuizPostToServer, PostResponse } from '../../models'
import { postQuiz } from '../../services/api'
import Spinner from '../../components/Spinner/Spinner'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import Button from '../../ui/Button/Button'
import { useGetAllQuizzesQuery } from '../../services/quizService'

const QuizCreatorCont = () => {
  const {
    data: allQuizzesData,
    error: allQuizzesError,
    refetch: refetchAllQuizzes,
  } = useGetAllQuizzesQuery()
  const [postResponse, setPostResponse] = useState<PostResponse[] | null>(null)
  const [isPosting, setIsPosting] = useState(false)
  const [isErrorPosting, setIsErrorPosting] = useState(false)

  // get Total count of All Quizzes
  const [quizzesTotalCount, setQuizzesTotalCount] = useState(1)
  useEffect(() => {
    if (allQuizzesError) console.error(allQuizzesError)
    if (allQuizzesData) {
      setQuizzesTotalCount(Object.keys(allQuizzesData).length + 1)
    }
  }, [allQuizzesData, allQuizzesError])

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

  const handlePostQuizData = (data: IQuizPostToServer[]): void => {
    setIsPosting(true)

    postQuiz(data)
      .then(res => handlePostResponseLoaded(res))
      .catch(err => handlePostError(err))
  }

  const handleRetryAgain = (): void => {
    setPostResponse(null)
    refetchAllQuizzes()
  }

  return (
    <div className={cls.wrapper}>
      {isPosting && <Spinner />}
      {isErrorPosting && <ErrorMessage />}
      {postResponse && !isErrorPosting ? (
        <>
          <p>OK! Your Data have saved.</p>
          <Button onClickButton={handleRetryAgain} variant={'success'}>
            Add New Quiz
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

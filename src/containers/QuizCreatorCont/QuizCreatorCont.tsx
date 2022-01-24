import React, { useEffect, useState } from 'react'
import cls from './QuizCreatorCont.module.css'
import QuizCreator from '../../components/QuizCreator/QuizCreator'
import { IQuizPostToServer } from '../../models'
import Spinner from '../../components/Spinner/Spinner'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import Button from '../../ui/Button/Button'
import {
  useGetAllQuizzesQuery,
  usePostQuizMutation,
} from '../../services/quizService'
import HorizontalSeparator from '../../ui/HorizontalSeparator/HorizontalSeparator'

const QuizCreatorCont = () => {
  const {
    data: allQuizzesData,
    error: allQuizzesError,
    refetch: refetchAllQuizzes,
  } = useGetAllQuizzesQuery()
  const [
    postQuiz,
    {
      data: postQuizResponse,
      error: postError,
      isLoading: isPosting,
      reset: resetPostResponse,
    },
  ] = usePostQuizMutation()

  // get Total count of All Quizzes
  const [quizzesTotalCount, setQuizzesTotalCount] = useState(1)
  useEffect(() => {
    if (allQuizzesError) console.error(allQuizzesError)
    if (allQuizzesData) {
      setQuizzesTotalCount(Object.keys(allQuizzesData).length + 1)
    }
  }, [allQuizzesData, allQuizzesError])

  const handlePostQuizData = (quiz: IQuizPostToServer): void => {
    postQuiz(quiz)
  }

  const handleRetryAgain = (): void => {
    resetPostResponse()
    refetchAllQuizzes()
  }

  if (postError) console.error(postError)

  return (
    <div className={cls.wrapper}>
      {isPosting && <Spinner />}
      {postError && <ErrorMessage />}

      {postQuizResponse && !postError ? (
        <>
          <p>OK! Your Data have saved.</p>
          <Button
            onClickButton={handleRetryAgain}
            variant={'success'}
            cssStyles={cls.mr0}
          >
            Add New Quiz
          </Button>
          <HorizontalSeparator />

          <p>Response</p>
          <pre>
            <code>{JSON.stringify(postQuizResponse, null, 2)}</code>
          </pre>
        </>
      ) : null}

      {!postQuizResponse && !postError ? (
        <QuizCreator
          quizzesTotalCount={quizzesTotalCount}
          onPostQuizData={handlePostQuizData}
        />
      ) : null}
    </div>
  )
}

export default QuizCreatorCont

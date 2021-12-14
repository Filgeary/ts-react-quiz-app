import React, { useEffect, useState } from 'react'
import cls from './Quiz.module.css'
import Question from '../Question/Question'
import AnswersList from '../AnswersList/AnswersList'
import { IQuiz } from '../../models'
import Results from '../Results/Results'

type QuizProps = {
  data: IQuiz[]
}
type AnswerValue = Record<string, 'right' | 'wrong'> | null

const Quiz = ({ data }: QuizProps) => {
  const [quizzes, setQuizzes] = useState<IQuiz[] | null>(null)
  const [quizCount, setQuizCount] = useState(0)
  const [answerValue, setAnswerValue] = useState<AnswerValue>(null)
  const [isFinished, setIsFinished] = useState(false)

  useEffect(() => {
    setQuizzes(data)
  }, [data])

  const isCorrectAnswer = (answerId: number) => {
    return quizzes?.[quizCount].correctAnswerID === answerId
  }
  const isQuizFinished = () => quizCount + 1 === quizzes?.length

  const handleChangeAnswer = (answerId: number): void => {
    if (isCorrectAnswer(answerId)) {
      setAnswerValue({ [answerId]: 'right' })

      const timerId = setTimeout(() => {
        if (isQuizFinished()) {
          setIsFinished(true)
        } else {
          setQuizCount(quizCount + 1)
          setAnswerValue(null)
        }
        clearTimeout(timerId)
      }, 1000)
    } else {
      setAnswerValue({ [answerId]: 'wrong' })
    }
  }

  if (!quizzes) return <p>No Data...</p>

  const { id, question, answers } = quizzes[quizCount]
  const heading = !isFinished ? 'Can you try the Quiz?' : 'See your Answers!'

  return (
    <div className={cls.wrapper}>
      <h2 className={cls.heading}>{heading}</h2>

      {isFinished ? (
        <Results />
      ) : (
        <div className={cls.content}>
          <Question
            id={id}
            question={question}
            quizzesLength={quizzes.length}
          />
          <AnswersList
            answers={answers}
            answerValue={answerValue}
            onChangeAnswer={handleChangeAnswer}
          />
        </div>
      )}
    </div>
  )
}

export default Quiz

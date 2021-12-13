import React, { useEffect, useState } from 'react'
import cls from './Quiz.module.css'
import Question from '../Question/Question'
import AnswersList from '../AnswersList/AnswersList'
import { IQuiz } from '../../models'

type QuizProps = {
  data: IQuiz[]
}
type AnswerValue = Record<string, 'right' | 'wrong'> | null

const Quiz = ({ data }: QuizProps) => {
  const [quizzes, setQuizzes] = useState<IQuiz[] | null>(null)
  const [quizCount, setQuizCount] = useState(0)
  const [answerValue, setAnswerValue] = useState<AnswerValue>(null)

  useEffect(() => {
    setQuizzes(data)
  }, [data])

  const isCorrectAnswer = (answerId: number) => {
    return quizzes?.[quizCount].correctAnswerID === answerId
  }

  const handleChangeAnswer = (answerId: number): void => {
    if (isCorrectAnswer(answerId)) {
      setAnswerValue({ [answerId]: 'right' })

      const timerId = setTimeout(() => {
        setQuizCount(quizCount + 1)
        setAnswerValue(null)
        clearTimeout(timerId)
      }, 1000)
    } else {
      setAnswerValue({ [answerId]: 'wrong' })
    }
  }

  if (!quizzes) return <p>Oops...</p>
  if (quizCount === quizzes.length) return <p>Finished!</p>

  const { id, question, answers } = quizzes[quizCount]

  return (
    <div className={cls.wrapper}>
      <h2 className={cls.heading}>Can you try the Quiz?</h2>

      <article className={cls.content}>
        <Question id={id} question={question} quizzesLength={quizzes.length} />
        <AnswersList
          answers={answers}
          answerValue={answerValue}
          onChangeAnswer={handleChangeAnswer}
        />
      </article>
    </div>
  )
}

export default Quiz

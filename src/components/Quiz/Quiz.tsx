import React, { useEffect, useState } from 'react'
import cls from './Quiz.module.css'
import Question from '../Question/Question'
import AnswersList from '../AnswersList/AnswersList'
import { IQuiz } from '../../models'

type QuizProps = {
  data: IQuiz[]
}

const Quiz = ({ data }: QuizProps) => {
  const [quizzes, setQuizzes] = useState<IQuiz[] | null>(null)
  const [quizCount, setQuizCount] = useState(0)

  useEffect(() => {
    setQuizzes(data)
  }, [data])

  const handleChangeAnswer = (id: number): void => {
    // TODO: replace later
    console.log(id)
    setQuizCount(quizCount + 1)
  }

  if (!quizzes) {
    return <p>Loading...</p>
  }

  const { id, question, answers } = quizzes[quizCount]

  return (
    <div className={cls.wrapper}>
      <h2 className={cls.heading}>Can you try the Quiz?</h2>

      <article className={cls.content}>
        <Question id={id} question={question} quizzesLength={quizzes.length} />
        <AnswersList answers={answers} onChangeAnswer={handleChangeAnswer} />
      </article>
    </div>
  )
}

export default Quiz

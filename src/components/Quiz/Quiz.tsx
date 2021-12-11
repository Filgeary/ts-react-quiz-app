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

  useEffect(() => {
    setQuizzes(data)
  }, [data])

  const handleChangeAnswer = (id: number): void => {
    // TODO: replace later
    console.log(id)
  }

  if (!quizzes) {
    return <p>Loading...</p>
  }

  const { id, question, answers } = quizzes[0]

  return (
    <div className={cls.wrapper}>
      <h2 className={cls.heading}>Can you try the Quiz?</h2>

      <article className={cls.content}>
        <Question id={id} question={question} />
        <AnswersList answers={answers} onChangeAnswer={handleChangeAnswer} />
      </article>
    </div>
  )
}

export default Quiz

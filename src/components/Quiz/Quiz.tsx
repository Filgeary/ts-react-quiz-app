import React from 'react'
import cls from './Quiz.module.css'
import Question from '../Question/Question'
import AnswersList from '../AnswersList/AnswersList'

const Quiz = () => {
  return (
    <div className={cls.wrapper}>
      <h2 className={cls.heading}>Can you try the Quiz?</h2>

      <article className={cls.content}>
        <Question />
        <AnswersList />
      </article>
    </div>
  )
}

export default Quiz

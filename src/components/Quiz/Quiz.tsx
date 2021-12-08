import React from 'react'
import cls from './Quiz.module.css'
import Question from '../Question/Question'

const Quiz = () => {
  return (
    <div className={cls.wrapper}>
      <h2 className={cls.heading}>Can you try the Quiz?</h2>

      <Question />
    </div>
  )
}

export default Quiz

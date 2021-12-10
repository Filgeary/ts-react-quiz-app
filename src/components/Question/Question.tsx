import React from 'react'
import cls from './Question.module.css'
import { IQuiz } from '../../models'

type QuestionProps = Pick<IQuiz, 'id' | 'question'>

const Question = ({ id, question }: QuestionProps) => (
  <section className={cls.content}>
    <div className={cls.headingWrapper}>
      <h3>Question {id}</h3>
      <small>5 from 11</small>
    </div>

    <p>{question}</p>
  </section>
)

export default Question

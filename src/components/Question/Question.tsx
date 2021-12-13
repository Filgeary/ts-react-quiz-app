import React from 'react'
import cls from './Question.module.css'
import { IQuiz } from '../../models'

type PickedProps = Pick<IQuiz, 'id' | 'question'>
type Props = {
  quizzesLength: number
}

const Question = ({ id, question, quizzesLength }: PickedProps & Props) => (
  <section className={cls.content}>
    <div className={cls.headingWrapper}>
      <h3>Question {id}</h3>
      <small>
        {id} from {quizzesLength}
      </small>
    </div>

    <p>{question}</p>
  </section>
)

export default Question

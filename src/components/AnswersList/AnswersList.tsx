import React from 'react'
import cls from './AnswersList.module.css'
import AnswerItem from './AnswerItem/AnswerItem'
import { IQuizAnswer } from '../../models'

type AnswersListProps = {
  answers: IQuizAnswer[]
  onChangeAnswer: (id: number) => void
}

const AnswersList = (props: AnswersListProps) => {
  const { answers, onChangeAnswer } = props

  return (
    <section className={cls.content}>
      <h3>Answers Options</h3>

      <ul className={cls.list}>
        {answers?.map(answer => {
          const { id } = answer

          return (
            <AnswerItem
              key={id}
              answer={answer}
              onChangeAnswer={onChangeAnswer}
            />
          )
        })}
      </ul>
    </section>
  )
}

export default AnswersList

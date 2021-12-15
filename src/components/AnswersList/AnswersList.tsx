import React from 'react'
import cls from './AnswersList.module.css'
import AnswerItem from './AnswerItem/AnswerItem'
import { IQuizAnswer } from '../../models'
import { AnswerRecord } from '../Quiz/Quiz'

type AnswersListProps = {
  answers: IQuizAnswer[]
  answerRecord: AnswerRecord | null
  onChangeAnswer: (id: number) => void
}

const AnswersList = (props: AnswersListProps) => {
  const { answers, answerRecord, onChangeAnswer } = props

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
              answerValue={answerRecord ? answerRecord[id] : ''}
              onChangeAnswer={onChangeAnswer}
            />
          )
        })}
      </ul>
    </section>
  )
}

export default AnswersList

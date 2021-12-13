import React from 'react'
import cls from './AnswersList.module.css'
import AnswerItem from './AnswerItem/AnswerItem'
import { IQuizAnswer } from '../../models'

type AnswersListProps = {
  answers: IQuizAnswer[]
  answerValue: Record<string, 'right' | 'wrong'> | null
  onChangeAnswer: (id: number) => void
}

const AnswersList = (props: AnswersListProps) => {
  const { answers, answerValue, onChangeAnswer } = props

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
              answerValue={answerValue ? answerValue[id] : ''}
              onChangeAnswer={onChangeAnswer}
            />
          )
        })}
      </ul>
    </section>
  )
}

export default AnswersList

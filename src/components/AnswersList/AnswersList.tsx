import React from 'react'
import cls from './AnswersList.module.css'
import { AnswerItem } from './AnswerItem/AnswerItem'
import { IQuiz } from '../../models'

type AnswersListProps = Pick<IQuiz, 'answers'>

const AnswersList = ({ answers }: AnswersListProps) => (
  <section className={cls.content}>
    <h3>Answers Options</h3>

    <ul className={cls.list}>
      {answers?.map((item, idx) => {
        const { title } = item

        return <AnswerItem key={idx} title={title} />
      })}
    </ul>
  </section>
)

export default AnswersList

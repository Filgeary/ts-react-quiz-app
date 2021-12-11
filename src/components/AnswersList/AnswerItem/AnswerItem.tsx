import React from 'react'
import cls from './AnswerItem.module.css'
import { IQuizAnswer } from '../../../models'

type AnswerItemProps = {
  answer: IQuizAnswer
  onChangeAnswer: (id: number) => void
}

const AnswerItem = (props: AnswerItemProps) => {
  const {
    answer: { id, title },
    onChangeAnswer,
  } = props

  return (
    <li className={cls.item} tabIndex={0} onClick={() => onChangeAnswer(id)}>
      {title}
    </li>
  )
}

export default AnswerItem

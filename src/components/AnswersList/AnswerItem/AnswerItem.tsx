import React from 'react'
import cls from './AnswerItem.module.css'
import { IQuizAnswer } from '../../../models'

type AnswerItemProps = {
  answer: IQuizAnswer
  answerValue: 'right' | 'wrong' | ''
  onChangeAnswer: (id: number) => void
}

const AnswerItem = (props: AnswerItemProps) => {
  const {
    answer: { id, title },
    answerValue,
    onChangeAnswer,
  } = props

  const classes = [cls.item]
  if (answerValue) classes.push(cls[answerValue])

  return (
    <li
      className={classes.join(' ')}
      tabIndex={0}
      onClick={() => onChangeAnswer(id)}
    >
      {title}
    </li>
  )
}

export default AnswerItem

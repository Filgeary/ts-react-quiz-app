import React from 'react'
import cls from './AnswerItem.module.css'
import { IQuizAnswer } from '../../../models'

type AnswerItemProps = Pick<IQuizAnswer, 'title'>

export const AnswerItem = ({ title }: AnswerItemProps) => (
  <li className={cls.item}>{title}</li>
)

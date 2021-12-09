import React from 'react'
import cls from './AnswersList.module.css'
import { AnswerItem } from './AnswerItem/AnswerItem'

const AnswersList = () => (
  <section className={cls.content}>
    <h3>Answers Options</h3>

    <ul className={cls.list}>
      <AnswerItem />
    </ul>
  </section>
)

export default AnswersList

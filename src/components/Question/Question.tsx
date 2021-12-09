import React from 'react'
import cls from './Question.module.css'

const Question = () => (
  <section className={cls.content}>
    <div className={cls.headingWrapper}>
      <h3>Question 5</h3>
      <small>5 from 11</small>
    </div>

    <p>Some Long Text</p>
  </section>
)

export default Question

import React from 'react'
import cls from './Question.module.css'

const Question = () => (
  <article className={cls.wrapper}>
    <section className={cls.content}>
      <div className={cls.headingWrapper}>
        <h3>Question 5</h3>
        <small>5 from 11</small>
      </div>
      <p>Some Long Text</p>
    </section>

    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
  </article>
)

export default Question

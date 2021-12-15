import React from 'react'
import cls from './Results.module.css'
import { IQuiz } from '../../models'
import { AnswerValue } from '../Quiz/Quiz'

type ResultsProps = {
  quizzes: IQuiz[]
  derivedAnswersMap: Map<number, AnswerValue>
}

const Results = ({ quizzes, derivedAnswersMap }: ResultsProps) => {
  const rightAnswersCount = [...derivedAnswersMap.values()].filter(
    value => value === 'right',
  ).length

  return (
    <div className={cls.wrapper}>
      <h2>Total Results</h2>
      <p className={cls.result}>
        Right: {rightAnswersCount} from {quizzes.length}
      </p>

      <ul className={cls.list}>
        {quizzes.map((quiz, idx) => {
          const { id, question } = quiz
          const checkIcon = derivedAnswersMap.get(idx) === 'right' ? '✅' : '👎'

          return (
            <li key={id} className={cls.item}>
              {checkIcon} {question}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Results

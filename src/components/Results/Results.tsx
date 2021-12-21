import React from 'react'
import cls from './Results.module.css'
import { IQuiz } from '../../models'
import { AnswerValue } from '../Quiz/Quiz'
import Button from '../../ui/Button/Button'
import { useNavigate } from 'react-router-dom'

type ResultsProps = {
  quizzes: IQuiz[]
  derivedAnswersMap: Map<number, AnswerValue>
  onClickRetryAgain: () => void
}

const Results = (props: ResultsProps) => {
  const { quizzes, derivedAnswersMap, onClickRetryAgain } = props
  const rightAnswersCount = [...derivedAnswersMap.values()].filter(
    value => value === 'right',
  ).length

  const navigate = useNavigate()
  const handleClickGoToHome = (): void => navigate('/')

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

      <div>
        <Button onClickButton={onClickRetryAgain} variant={'primary'}>
          Retry Again
        </Button>
        <Button onClickButton={handleClickGoToHome} variant={'success'}>
          Home
        </Button>
      </div>
    </div>
  )
}

export default Results

import React, { useEffect, useState } from 'react'
import cls from './Quiz.module.css'
import Question from '../Question/Question'
import AnswersList from '../AnswersList/AnswersList'
import { IQuiz } from '../../models'
import Results from '../Results/Results'

type QuizProps = {
  data: IQuiz[] | undefined
}
export type AnswerValue = 'right' | 'wrong'
export type AnswerRecord = Record<string, AnswerValue>

const Quiz = ({ data }: QuizProps) => {
  const [quizzes, setQuizzes] = useState<IQuiz[] | null>(null)
  const [quizCount, setQuizCount] = useState(0)
  const [answerRecord, setAnswerRecord] = useState<AnswerRecord | null>(null)
  const [derivedAnswersMap, setDerivedAnswersMap] = useState(
    new Map<number, AnswerValue>(),
  )
  const [isFinished, setIsFinished] = useState(false)

  useEffect(() => {
    if (data && data.length > 0) setQuizzes(data)
  }, [data])

  const isCorrectAnswer = (answerId: number) => {
    return quizzes?.[quizCount].correctAnswerID === answerId
  }
  const isQuizFinished = () => quizCount + 1 === quizzes?.length

  const handleChangeAnswer = (answerId: number): void => {
    if (isCorrectAnswer(answerId)) {
      setAnswerRecord({ [answerId]: 'right' })

      if (!derivedAnswersMap.has(quizCount)) {
        setDerivedAnswersMap(derivedAnswersMap.set(quizCount, 'right'))
      }

      const timerId = setTimeout(() => {
        if (isQuizFinished()) {
          setIsFinished(true)
        } else {
          setQuizCount(quizCount + 1)
          setAnswerRecord(null)
        }
        clearTimeout(timerId)
      }, 1000)
    } else {
      setAnswerRecord({ [answerId]: 'wrong' })
      setDerivedAnswersMap(derivedAnswersMap.set(quizCount, 'wrong'))
    }
  }

  // clear Full State
  const handleClickRetryAgain = (): void => {
    setQuizCount(0)
    setAnswerRecord(null)
    setDerivedAnswersMap(new Map())
    setIsFinished(false)
  }

  if (!quizzes) return <p style={{ textAlign: 'center' }}>No Data...</p>

  const { id, question, answers } = quizzes[quizCount]
  const heading = !isFinished ? 'Can you try the Quiz?' : 'See your Answers!'

  return (
    <>
      <h2 className={cls.heading}>{heading}</h2>

      {isFinished ? (
        <Results
          quizzes={quizzes}
          derivedAnswersMap={derivedAnswersMap}
          onClickRetryAgain={handleClickRetryAgain}
        />
      ) : (
        <div className={cls.content}>
          <Question
            id={id}
            question={question}
            quizzesLength={quizzes.length}
          />
          <AnswersList
            answers={answers}
            answerRecord={answerRecord}
            onChangeAnswer={handleChangeAnswer}
          />
        </div>
      )}
    </>
  )
}

export default Quiz

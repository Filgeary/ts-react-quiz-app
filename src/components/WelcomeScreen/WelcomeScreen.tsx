import React from 'react'
import cls from './WelcomeScreen.module.css'
import { useNavigate } from 'react-router-dom'
import { AppRoute } from '../../constants'

const WelcomeScreen = () => {
  const navigate = useNavigate()
  const handleClickGoToQuiz = (): void => navigate(AppRoute.QUIZZES)

  return (
    <div className={cls.wrapper}>
      <h2 className={cls.heading}>
        Welcome to the curated picked Master's Quiz
      </h2>
      <p className={cls.message}>Are You Ready?</p>
      <button
        type={'button'}
        className={cls.link}
        onClick={handleClickGoToQuiz}
      >
        START
      </button>
    </div>
  )
}

export default WelcomeScreen

import React from 'react'
import cls from './QuizCreator.module.css'
import Button from '../../ui/Button/Button'

const QuizCreator = () => {
  const handleAddField = (): void => {}
  const handleCreateQuiz = (): void => {}

  return (
    <div className={cls.wrapper}>
      <h2 className={cls.heading}>Quiz Creator</h2>

      <form className={cls.form}>
        <input type='text' />
        <br />

        <input type='text' />
        <input type='text' />
        <input type='text' />
        <input type='text' />
        <select>{/*  */}</select>

        <div className={cls.controlsWrapper}>
          <Button onClickButton={handleAddField} variant={'primary'}>
            Add Field
          </Button>
          <Button
            onClickButton={handleCreateQuiz}
            variant={'success'}
            cssStyles={cls.mr0}
          >
            Create Quiz
          </Button>
        </div>
      </form>
    </div>
  )
}

export default QuizCreator

import React, { useEffect, useState } from 'react'
import cls from './QuizCreator.module.css'
import Button from '../../ui/Button/Button'
import { createControl, validateForm, validateInput } from '../../utils'
import { IInputControl } from '../../typings'
import Input from '../../ui/Input/Input'
import Select from '../../ui/Select/Select'
import HorizontalSeparator from '../../ui/HorizontalSeparator/HorizontalSeparator'
import { IQuiz } from '../../models'

type FormControls = Record<'question' | string, IInputControl>
type ChangeEventInput = React.ChangeEvent<HTMLInputElement>
type ChangeEventSelect = React.ChangeEvent<HTMLSelectElement>

const createInputControl = (id: number): IInputControl => {
  return createControl(
    {
      type: 'text',
      label: `Option ${id}`,
      errorMessage: 'Field is empty',
    },
    { isRequired: true },
  )
}
const createFormControls = (): FormControls => {
  return {
    question: createControl(
      {
        type: 'text',
        label: 'Enter a Question',
        errorMessage: 'Field is empty',
      },
      { isRequired: true },
    ),
    option1: createInputControl(1),
    option2: createInputControl(2),
    option3: createInputControl(3),
    option4: createInputControl(4),
  }
}
const transformControlsToArray = (controls: FormControls): IInputControl[] => {
  return Object.keys(controls).map(controlName => controls[controlName])
}

const QuizCreator = () => {
  const [quizList, setQuizList] = useState([] as IQuiz[])
  const [formControls, setFormControls] = useState<FormControls>(
    createFormControls(),
  )
  const [questionId, setQuestionId] = useState(1)
  const [rightAnswerId, setRightAnswerId] = useState(0)
  const [isValidForm, setIsValidForm] = useState(false)

  // check form validation
  const controls = transformControlsToArray(formControls)
  useEffect(() => {
    setIsValidForm(() => validateForm(...controls))
  }, [controls])

  const handleChangeInput = (
    evt: ChangeEventInput,
    controlName: string,
  ): void => {
    const value = evt.target.value
    const control = formControls[controlName]

    setFormControls(prevState => ({
      ...prevState,
      [controlName]: {
        ...control,
        value,
        isTouched: true,
        isValid: validateInput({
          value,
          validation: control.validation,
        }),
      },
    }))
  }

  const handleChangeSelect = (evt: ChangeEventSelect): void => {
    setRightAnswerId(+evt.target.value)
  }

  // TODO
  const handleAddQuestion = (): void => {
    setQuizList(prevState => [
      ...prevState,
      {
        question: formControls.question.value,
        id: questionId,
        correctAnswerID: rightAnswerId,
        answers: [
          { id: 1, title: 'answer 1' },
          { id: 2, title: 'answer 2' },
          { id: 3, title: 'answer 3' },
          { id: 4, title: 'answer 4' },
        ],
      },
    ])
    setQuestionId(prevState => prevState + 1)
  }

  // TODO
  const handleCreateQuiz = (): void => {
    console.dir(quizList)
  }

  return (
    <div className={cls.wrapper}>
      <h2 className={cls.heading}>Quiz Creator</h2>

      <form className={cls.form}>
        <legend className={cls.legend}>Question {questionId}</legend>

        {Object.keys(formControls).map((controlName, idx) => {
          const control = formControls[controlName]
          return (
            <React.Fragment key={controlName + idx}>
              <Input
                type={control.type}
                label={control.label}
                value={control.value}
                onChange={evt => handleChangeInput(evt, controlName)}
                isValid={control.isValid}
                isTouched={control.isTouched}
                shouldValidate={control.validation?.isRequired}
                errorMessage={control.errorMessage}
              />
              {idx === 0 && <HorizontalSeparator />}
            </React.Fragment>
          )
        })}

        <HorizontalSeparator />
        <Select
          title={'Choose a Right Answer'}
          value={rightAnswerId}
          options={[1, 2, 3, 4]}
          onChangeSelect={handleChangeSelect}
        />

        <div className={cls.controlsWrapper}>
          <Button
            onClickButton={handleAddQuestion}
            variant={'primary'}
            isDisabled={!isValidForm}
          >
            Add Question
          </Button>
          <Button
            onClickButton={handleCreateQuiz}
            variant={'success'}
            cssStyles={cls.mr0}
            isDisabled={quizList.length === 0}
          >
            Create Quiz
          </Button>
        </div>
      </form>
    </div>
  )
}

export default QuizCreator

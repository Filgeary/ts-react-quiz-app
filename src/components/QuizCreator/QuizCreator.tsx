import React, { useEffect, useState } from 'react'
import cls from './QuizCreator.module.css'
import Button from '../../ui/Button/Button'
import { createControl, validateForm, validateInput } from '../../utils'
import { IInputControl } from '../../typings'
import Input from '../../ui/Input/Input'
import Select from '../../ui/Select/Select'
import HorizontalSeparator from '../../ui/HorizontalSeparator/HorizontalSeparator'
import { IQuizPostToServer } from '../../models'

type FormControlsKeys =
  | 'question'
  | 'option1'
  | 'option2'
  | 'option3'
  | 'option4'
  | string
type FormControls = Record<FormControlsKeys, IInputControl>
type ChangeEventInput = React.ChangeEvent<HTMLInputElement>
type ChangeEventSelect = React.ChangeEvent<HTMLSelectElement>

type Props = {
  quizzesTotalCount: number
  onPostQuizData: (data: IQuizPostToServer) => void
}

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

const QuizCreator = (props: Props) => {
  const { quizzesTotalCount, onPostQuizData } = props
  const [quiz, setQuiz] = useState<IQuizPostToServer | null>(null)
  const [formControls, setFormControls] = useState<FormControls>(
    createFormControls(),
  )
  const [rightAnswerId, setRightAnswerId] = useState(1)
  const [isValidForm, setIsValidForm] = useState(false)

  // sync QuizzesTotalCount to make right sequence by id
  const [questionId, setQuestionId] = useState(1)
  useEffect(() => {
    setQuestionId(quizzesTotalCount)
  }, [quizzesTotalCount])

  // check form validation
  const controls = transformControlsToArray(formControls)
  useEffect(() => {
    setIsValidForm(() => validateForm(...controls))
  }, [controls])

  // clean up
  const clearInputs = (): void => {
    setFormControls(createFormControls())
    setRightAnswerId(1)
  }
  const resetFullForm = (): void => {
    clearInputs()
    setQuiz(null)
    setIsValidForm(false)
  }

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

  const handleAddQuestion = (): void => {
    const { question, option1, option2, option3, option4 } = formControls

    setQuiz(() => ({
      question: question.value,
      id: questionId,
      correctAnswerID: rightAnswerId,
      answers: [
        { id: 1, title: option1.value },
        { id: 2, title: option2.value },
        { id: 3, title: option3.value },
        { id: 4, title: option4.value },
      ],
    }))
    setQuestionId(id => id + 1)
    clearInputs()
  }

  const handleCreateQuiz = (): void => {
    if (quiz) onPostQuizData(quiz)
    setTimeout(() => resetFullForm(), 0)
  }

  return (
    <>
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
                isFocus={idx === 0}
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
            Save Question
          </Button>
          <Button
            onClickButton={handleCreateQuiz}
            variant={'success'}
            cssStyles={cls.mr0}
            isDisabled={!Boolean(quiz)}
          >
            Send Quiz to Server
          </Button>
        </div>
      </form>
    </>
  )
}

export default QuizCreator

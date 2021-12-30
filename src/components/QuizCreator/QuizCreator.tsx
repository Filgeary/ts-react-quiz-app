import React, { useState } from 'react'
import cls from './QuizCreator.module.css'
import Button from '../../ui/Button/Button'
import { createControl } from '../../utils'
import { IInputControl } from '../../typings'
import Input from '../../ui/Input/Input'
import Select from '../../ui/Select/Select'

type FormControls = Record<string, IInputControl>
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

const QuizCreator = () => {
  const [formControls, setFormControls] = useState<FormControls>(
    createFormControls(),
  )
  const [rightAnswerId, setRightAnswerId] = useState(0)

  const handleChangeInput = (
    evt: ChangeEventInput,
    controlName: string,
  ): void => {
    setFormControls(prevState => ({
      ...prevState,
      [controlName]: {
        ...formControls[controlName],
        value: evt.target.value,
      },
    }))
  }

  const handleChangeSelect = (evt: ChangeEventSelect): void => {
    setRightAnswerId(+evt.target.value)
  }

  const handleAddField = (): void => {}
  const handleCreateQuiz = (): void => {}

  return (
    <div className={cls.wrapper}>
      <h2 className={cls.heading}>Quiz Creator</h2>

      <form className={cls.form}>
        {Object.keys(formControls).map((controlName, idx) => {
          const control = formControls[controlName]
          return (
            <Input
              key={controlName + idx}
              type={control.type}
              label={control.label}
              value={control.value}
              onChange={evt => handleChangeInput(evt, controlName)}
              isValid={control.isValid}
              isTouched={control.isTouched}
              shouldValidate={control.validation?.isRequired}
              errorMessage={control.errorMessage}
            />
          )
        })}

        <Select
          title={'Choose a Right Answer'}
          value={rightAnswerId}
          options={[1, 2, 3, 4]}
          onChangeSelect={handleChangeSelect}
        />

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

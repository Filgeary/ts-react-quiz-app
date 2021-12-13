import React from 'react'
import { render, screen } from '@testing-library/react'
import AnswerItem from './AnswerItem'
import { _mockQuizzes } from '../../../_mocks/_mockQuizzes'
import userEvent from '@testing-library/user-event'

const answer = _mockQuizzes[0].answers[0]

test('renders default appearance with mocked data', () => {
  render(
    <AnswerItem answer={answer} answerValue={''} onChangeAnswer={() => {}} />,
  )

  expect(screen.getByRole('listitem')).toBeInTheDocument()
  expect(screen.getByText(/answer 1.1/i)).toBeInTheDocument()
})

describe('Events', () => {
  const mockChangeAnswer = jest.fn()

  test('click correct times on onChangeAnswer', () => {
    render(
      <AnswerItem
        answer={answer}
        answerValue={''}
        onChangeAnswer={mockChangeAnswer}
      />,
    )

    userEvent.click(screen.getByText(/answer 1.1/i))
    expect(mockChangeAnswer).toBeCalledTimes(1)
  })
})

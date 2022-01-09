import React from 'react'
import { render, screen } from '@testing-library/react'
import AnswersList from './AnswersList'
import { _mockQuizzes } from '../../../_mocks/_mockQuizzes'
import userEvent from '@testing-library/user-event'

const { answers } = _mockQuizzes[0]

test('renders default appearance with mocked data', () => {
  render(
    <AnswersList
      answers={answers}
      answerRecord={null}
      onChangeAnswer={() => {}}
    />,
  )

  expect(
    screen.getByRole('heading', { name: /answers options/i }),
  ).toBeInTheDocument()
  expect(screen.getAllByRole('listitem')).toHaveLength(4)
  expect(screen.getByText(/answer 1.1/i)).toBeInTheDocument()
  expect(screen.getByText(/answer 1.4/i)).toBeInTheDocument()
})

describe('Events', () => {
  const mockChangeAnswer = jest.fn()

  test('click correct times on onChangeAnswer', () => {
    render(
      <AnswersList
        answers={answers}
        answerRecord={null}
        onChangeAnswer={mockChangeAnswer}
      />,
    )

    userEvent.click(screen.getByText(/answer 1.1/i))
    expect(mockChangeAnswer).toBeCalledTimes(1)

    userEvent.click(screen.getByText(/answer 1.4/i))
    expect(mockChangeAnswer).toBeCalledTimes(2)
  })
})

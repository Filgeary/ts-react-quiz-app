import React from 'react'
import { render, screen } from '@testing-library/react'
import AnswersList from './AnswersList'
import { _mockQuizzes } from '../../_mocks/_mockQuizzes'
import userEvent from '@testing-library/user-event'

const { answers } = _mockQuizzes[0]

test('renders default appearance with mocked data', () => {
  render(<AnswersList answers={answers} onChangeAnswer={() => {}} />)

  expect(
    screen.getByRole('heading', { name: /answers options/i }),
  ).toBeInTheDocument()
  expect(screen.getAllByRole('listitem')).toHaveLength(4)
  expect(screen.getByText(/answer 1.1/i)).toBeInTheDocument()
})

describe('Event', () => {
  test('click 1 time on onChangeAnswer', () => {
    const onChange = jest.fn()
    render(<AnswersList answers={answers} onChangeAnswer={onChange} />)

    userEvent.click(screen.getByText(/answer 1.1/i))
    expect(onChange).toBeCalledTimes(1)
  })
})

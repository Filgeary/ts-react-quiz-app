import React from 'react'
import { render, screen } from '@testing-library/react'
import AnswerItem from './AnswerItem'
import { _mockQuizzes } from '../../../_mocks/_mockQuizzes'
import userEvent from '@testing-library/user-event'

const answer = _mockQuizzes[0].answers[0]

test('renders default appearance with mocked data', () => {
  render(<AnswerItem answer={answer} onChangeAnswer={() => {}} />)

  expect(screen.getByRole('listitem')).toBeInTheDocument()
  expect(screen.getByText(/answer 1.1/i)).toBeInTheDocument()
})

describe('Event', () => {
  test('click 1 time on onChangeAnswer', () => {
    const onChange = jest.fn()
    render(<AnswerItem answer={answer} onChangeAnswer={onChange} />)

    userEvent.click(screen.getByText(/answer 1.1/i))
    expect(onChange).toBeCalledTimes(1)
  })
})

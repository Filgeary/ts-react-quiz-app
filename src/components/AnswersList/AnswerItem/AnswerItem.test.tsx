import React from 'react'
import { render, screen } from '@testing-library/react'
import AnswerItem from './AnswerItem'
import { _mockQuizzes } from '../../../_mocks/_mockQuizzes'

const answer = _mockQuizzes[0].answers[0]

test('renders default mocked data correctly', () => {
  const mockFn = jest.fn()
  render(<AnswerItem answer={answer} onChangeAnswer={mockFn} />)

  expect(screen.getByRole('listitem')).toBeInTheDocument()
  expect(screen.getByText(/answer 1.1/i)).toBeInTheDocument()
})

import React from 'react'
import { render, screen } from '@testing-library/react'
import Question from './Question'
import { _mockQuizzes } from '../../_mocks/_mockQuizzes'

const { id, question } = _mockQuizzes[0]

test('renders default appearance with mocked data', () => {
  render(<Question id={id} question={question} />)

  expect(
    screen.getByRole('heading', { name: /question 1/i }),
  ).toBeInTheDocument()
  expect(screen.getByText(/mock question 1/i)).toBeInTheDocument()
})

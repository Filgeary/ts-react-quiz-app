import React from 'react'
import { render, screen } from '@testing-library/react'
import Quiz from './Quiz'
import { _mockQuizzes } from '../../_mocks/_mockQuizzes'

const quizzesData = _mockQuizzes

test('renders default appearance with mocked data', () => {
  render(<Quiz data={quizzesData} />)

  expect(
    screen.getByRole('heading', {
      name: /can you try the quiz\?/i,
    }),
  ).toBeInTheDocument()
  expect(
    screen.getByRole('heading', { name: /question 1/i }),
  ).toBeInTheDocument()
  expect(
    screen.getByRole('heading', { name: /answers options/i }),
  ).toBeInTheDocument()
})

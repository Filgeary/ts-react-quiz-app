import React from 'react'
import { render, screen } from '@testing-library/react'
import Quiz from './Quiz'
import { _mockQuizzes } from '../../_mocks/_mockQuizzes'

const quizzesData = _mockQuizzes

test('renders default mocked data correctly', () => {
  render(<Quiz data={quizzesData} />)

  expect(
    screen.getByRole('heading', {
      name: /can you try the quiz\?/i,
    }),
  ).toBeInTheDocument()
  expect(screen.getByText(/mock question 1/i)).toBeInTheDocument()
  expect(screen.getAllByRole('listitem')).toHaveLength(4)
})

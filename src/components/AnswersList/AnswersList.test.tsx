import React from 'react'
import { render, screen } from '@testing-library/react'
import AnswersList from './AnswersList'
import { _mockQuizzes } from '../../_mocks/_mockQuizzes'

const { answers } = _mockQuizzes[0]

test('renders default mocked data correctly', () => {
  render(<AnswersList answers={answers} />)

  expect(
    screen.getByRole('heading', { name: /answers options/i }),
  ).toBeInTheDocument()
  expect(screen.getAllByRole('listitem')).toHaveLength(4)
})

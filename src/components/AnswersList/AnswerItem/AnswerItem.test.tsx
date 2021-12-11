import React from 'react'
import { render, screen } from '@testing-library/react'
import { AnswerItem } from './AnswerItem'
import { _mockQuizzes } from '../../../_mocks/_mockQuizzes'

const { title } = _mockQuizzes[0].answers[0]

test('renders default mocked data correctly', () => {
  render(<AnswerItem title={title} />)

  expect(screen.getByRole('listitem')).toBeInTheDocument()
  expect(screen.getByText(/answer 1.1/i)).toBeInTheDocument()
})

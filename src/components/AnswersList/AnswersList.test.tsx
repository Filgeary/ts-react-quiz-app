import React from 'react'
import { render, screen } from '@testing-library/react'
import AnswersList from './AnswersList'

test('renders Heading correctly', () => {
  render(<AnswersList />)
  const heading = screen.getByRole('heading', { name: /answers options/i })
  expect(heading).toBeInTheDocument()
})

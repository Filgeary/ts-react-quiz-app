import React from 'react'
import { render, screen } from '@testing-library/react'
import Question from './Question'

test('renders Heading correctly', () => {
  render(<Question />)
  const headingElem = screen.getByText(/question/i)
  expect(headingElem).toBeInTheDocument()
})

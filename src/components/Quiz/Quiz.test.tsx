import React from 'react'
import { render, screen } from '@testing-library/react'
import Quiz from './Quiz'

test('renders Heading correctly', () => {
  render(<Quiz />)
  const headingElem = screen.getByRole('heading', {
    name: /can you try the quiz\?/i,
  })
  expect(headingElem).toBeInTheDocument()
})

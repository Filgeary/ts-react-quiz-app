import React from 'react'
import { render, screen } from '@testing-library/react'
import ErrorMessage from './ErrorMessage'

test('renders Error description correctly', () => {
  render(<ErrorMessage />)
  const textElem = screen.getByText(/Oops! Something Wrong!/i)
  expect(textElem).toBeInTheDocument()
})

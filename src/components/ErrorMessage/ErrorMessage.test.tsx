import React from 'react'
import { render, screen } from '@testing-library/react'
import ErrorMessage from './ErrorMessage'

test('renders Error description', () => {
  render(<ErrorMessage />)
  expect(screen.getByText(/oops! something wrong!/i)).toBeInTheDocument()
})

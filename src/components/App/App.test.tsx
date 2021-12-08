import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders Heading H1 correctly', () => {
  render(<App />)
  const headingElem = screen.getByText(/React app/i)
  expect(headingElem).toBeInTheDocument()
})

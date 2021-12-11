import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders Heading correctly', () => {
  render(<App />)

  expect(
    screen.getByRole('heading', { name: /ts react quiz app/i }),
  ).toBeInTheDocument()
})

import React from 'react'
import { render, screen } from '@testing-library/react'
import WelcomeScreen from './WelcomeScreen'
import { MemoryRouter } from 'react-router-dom'

test('renders correctly', () => {
  render(<WelcomeScreen />, { wrapper: MemoryRouter })

  expect(
    screen.getByRole('heading', {
      name: /welcome to the curated picked master's quiz/i,
    }),
  ).toBeInTheDocument()
  expect(screen.getByText(/are you ready\?/i)).toBeInTheDocument()
  expect(screen.getByRole('button', { name: /start/i })).toBeInTheDocument()
})

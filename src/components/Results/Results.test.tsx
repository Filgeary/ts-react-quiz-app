import React from 'react'
import { render, screen } from '@testing-library/react'
import Results from './Results'

test('renders default appearance', () => {
  render(<Results />)

  expect(
    screen.getByRole('heading', { name: /total results/i }),
  ).toBeInTheDocument()
})

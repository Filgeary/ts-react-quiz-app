import React from 'react'
import { render, screen } from '@testing-library/react'
import Spinner from './Spinner'

test('renders Spinner icon', () => {
  render(<Spinner />)
  expect(screen.getByAltText(/spinner-icon/i)).toBeInTheDocument()
})

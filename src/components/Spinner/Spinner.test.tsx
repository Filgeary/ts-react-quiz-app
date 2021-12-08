import React from 'react'
import { render, screen } from '@testing-library/react'
import Spinner from './Spinner'

test('renders Spinner icon correctly', () => {
  render(<Spinner />)
  const iconElem = screen.getByAltText(/spinner-icon/i)
  expect(iconElem).toBeInTheDocument()
})

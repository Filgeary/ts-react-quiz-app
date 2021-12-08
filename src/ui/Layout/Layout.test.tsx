import React from 'react'
import { render, screen } from '@testing-library/react'
import Layout from './Layout'

test('renders children correctly', () => {
  render(
    <Layout>
      <p>Children</p>
    </Layout>,
  )
  const textElem = screen.getByText(/children/i)
  expect(textElem).toBeInTheDocument()
})

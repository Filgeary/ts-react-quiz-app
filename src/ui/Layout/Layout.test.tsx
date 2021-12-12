import React from 'react'
import { render, screen } from '@testing-library/react'
import Layout from './Layout'

test('renders mocked children', () => {
  render(
    <Layout>
      <h1>Child 1</h1>
      <p>Child 2</p>
      <div>Child 3</div>
    </Layout>,
  )

  expect(screen.getByText(/child 1/i)).toBeInTheDocument()
  expect(screen.getByText(/child 2/i)).toBeInTheDocument()
  expect(screen.getByText(/child 3/i)).toBeInTheDocument()
})

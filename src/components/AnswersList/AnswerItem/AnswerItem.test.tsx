import React from 'react'
import { render, screen } from '@testing-library/react'
import { AnswerItem } from './AnswerItem'

test('renders list items correctly', () => {
  render(<AnswerItem />)
  const listItem = screen.getByRole('listitem')
  expect(listItem).toBeInTheDocument()
})

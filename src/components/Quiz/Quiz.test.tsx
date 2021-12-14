import React from 'react'
import { render, screen } from '@testing-library/react'
import Quiz from './Quiz'
import { _mockQuizzes } from '../../_mocks/_mockQuizzes'
import userEvent from '@testing-library/user-event'

test('renders default appearance with mocked data', () => {
  render(<Quiz data={_mockQuizzes} />)

  expect(
    screen.getByRole('heading', {
      name: /can you try the quiz\?/i,
    }),
  ).toBeInTheDocument()
  expect(
    screen.getByRole('heading', { name: /question 1/i }),
  ).toBeInTheDocument()
  expect(
    screen.getByRole('heading', { name: /answers options/i }),
  ).toBeInTheDocument()
})

describe('Events', () => {
  test('stay on question 1 by click on wrong answer', async () => {
    render(<Quiz data={_mockQuizzes} />)

    userEvent.click(screen.getByText(/answer 1.2/i))
    await screen.findByRole('heading', { name: /question 1/i })
  })

  test('switch on question 2 by click on right answer', async () => {
    render(<Quiz data={_mockQuizzes} />)

    userEvent.click(screen.getByText(/answer 1.1/i))
    await screen.findByRole('heading', { name: /question 2/i })

    userEvent.click(screen.getByText(/answer 2.2/i))
    await screen.findByRole('heading', { name: /question 3/i })

    userEvent.click(screen.getByText(/answer 3.3/i))
    await screen.findByRole('heading', { name: /see your answers!/i })
    await screen.findByRole('heading', { name: /total results/i })
  })
})

import React from 'react'
import { render, screen } from '@testing-library/react'
import Quiz from './Quiz'
import { _mockQuizzes } from '../../_mocks/_mockQuizzes'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'

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

  test('right answers on All questions & gets correct results', async () => {
    render(<Quiz data={_mockQuizzes} />, { wrapper: MemoryRouter })

    userEvent.click(screen.getByText(/answer 1.1/i))
    await screen.findByRole('heading', { name: /question 2/i })

    userEvent.click(screen.getByText(/answer 2.2/i))
    await screen.findByRole('heading', { name: /question 3/i })

    userEvent.click(screen.getByText(/answer 3.3/i))
    await screen.findByRole('heading', { name: /see your answers!/i })
    await screen.findByRole('heading', { name: /total results/i })

    // gets 3 right check-icons
    await screen.findByText(/✅ Mock Question 1/i)
    await screen.findByText(/✅ Mock Question 2/i)
    await screen.findByText(/✅ Mock Question 3/i)
    await screen.findByText(/right: 3 from 3/i)

    expect(screen.queryByText(/👎 Mock Question 1/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/👎 Mock Question 2/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/👎 Mock Question 3/i)).not.toBeInTheDocument()
  })

  test('wrong answers on All questions & gets correct results', async () => {
    render(<Quiz data={_mockQuizzes} />, { wrapper: MemoryRouter })

    userEvent.click(screen.getByText(/answer 1.2/i)) // wrong answer
    userEvent.click(screen.getByText(/answer 1.1/i))
    await screen.findByRole('heading', { name: /question 2/i })

    userEvent.click(screen.getByText(/answer 2.1/i)) // wrong answer
    userEvent.click(screen.getByText(/answer 2.2/i))
    await screen.findByRole('heading', { name: /question 3/i })

    userEvent.click(screen.getByText(/answer 3.2/i)) // wrong answer
    userEvent.click(screen.getByText(/answer 3.3/i))
    await screen.findByRole('heading', { name: /see your answers!/i })
    await screen.findByRole('heading', { name: /total results/i })

    // get 3 wrong check-icons
    await screen.findByText(/👎 Mock Question 1/i)
    await screen.findByText(/👎 Mock Question 2/i)
    await screen.findByText(/👎 Mock Question 3/i)
    await screen.findByText(/right: 0 from 3/i)

    expect(screen.queryByText(/✅ Mock Question 1/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/✅ Mock Question 2/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/✅ Mock Question 3/i)).not.toBeInTheDocument()
  })

  test('reset full state by click after answering all questions', async () => {
    render(<Quiz data={_mockQuizzes} />, { wrapper: MemoryRouter })

    userEvent.click(screen.getByText(/answer 1.1/i))
    userEvent.click(await screen.findByText(/answer 2.2/i))
    userEvent.click(await screen.findByText(/answer 3.3/i))

    const btn = await screen.findByRole('button', { name: /retry again/i })
    userEvent.click(btn)

    await screen.findByRole('heading', {
      name: /can you try the quiz\?/i,
    })
    await screen.findByRole('heading', { name: /question 1/i })
  })
})

import React from 'react'
import { render, screen } from '@testing-library/react'
import Results from './Results'
import { _mockQuizzes } from '../../../_mocks/_mockQuizzes'
import { MemoryRouter } from 'react-router-dom'

const derivedAnswersMap = new Map()
  .set(0, 'right')
  .set(1, 'wrong')
  .set(2, 'right')

test('renders default appearance with mocked data', () => {
  render(
    <Results
      quizzes={_mockQuizzes}
      derivedAnswersMap={derivedAnswersMap}
      onClickRetryAgain={() => {}}
    />,
    { wrapper: MemoryRouter },
  )

  expect(
    screen.getByRole('heading', { name: /total results/i }),
  ).toBeInTheDocument()
  expect(screen.getByText(/✅ Mock Question 1/i)).toBeInTheDocument()
  expect(screen.getByText(/👎 Mock Question 2/i)).toBeInTheDocument()
  expect(screen.getByText(/✅ Mock Question 3/i)).toBeInTheDocument()
  expect(screen.getByText(/right: 2 from 3/i)).toBeInTheDocument()

  expect(
    screen.getByRole('button', { name: /retry again/i }),
  ).toBeInTheDocument()
  expect(screen.getByRole('button', { name: /home/i })).toBeInTheDocument()
})

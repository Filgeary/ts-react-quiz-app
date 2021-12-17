import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import userEvent from '@testing-library/user-event'

// sometimes we have to include props that are not really important for a test
// TypeScript utility types can help with that :)
//
// type ComponentProps = React.ComponentProps<typeof Component>;
//
// const baseProps: ComponentProps = {
//   onClick: () => {},
//   id: 1
// };
//
// function renderUI(props: Partial<ComponentProps> = {}) {
//   return render(<Component {...baseProps} {...props} />);
// }

test('renders default appearance with mocked data', () => {
  render(<App />)

  expect(
    screen.getByRole('heading', { name: /ts react quiz app/i }),
  ).toBeInTheDocument()
  expect(
    screen.getByRole('heading', {
      name: /can you try the quiz\?/i,
    }),
  ).toBeInTheDocument()
})

describe('Events', () => {
  test('opens and closes menu by click', async () => {
    render(<App />)
    userEvent.click(screen.getByRole('button', { name: /menu ⬇/i }))

    const btnClose = await screen.findByRole('button', { name: /close ❎/i })
    expect(
      screen.queryByRole('button', { name: /menu ⬇/i }),
    ).not.toBeInTheDocument()

    userEvent.click(btnClose)
    expect(
      screen.queryByRole('button', { name: /close ❎/i }),
    ).not.toBeInTheDocument()
  })
})

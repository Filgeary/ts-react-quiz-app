import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

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

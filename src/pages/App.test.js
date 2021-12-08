import { render, screen } from '@testing-library/react';
import App from './App';

test('renders in building info', () => {
  render(<App />);
  const textElement = screen.getByText(/Em construção/i);
  expect(textElement).toBeInTheDocument();
});

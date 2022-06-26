import { render, screen } from '@testing-library/react';
import App from './App';

test('Should mount App', () => {
  render(<App />);
  const linkElement = screen.getByTestId('app');
  expect(linkElement).toBeInTheDocument();
});

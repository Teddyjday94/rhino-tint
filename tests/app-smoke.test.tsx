import { render, screen } from '@testing-library/react';
import HomePage from '../app/page';

test('renders Rhino Window Tint brand', () => {
  render(<HomePage />);
  expect(screen.getByText(/Rhino Window Tint/i)).toBeInTheDocument();
});

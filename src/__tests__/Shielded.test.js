import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Shielded from '../Shielded';

test('renders and matches snapshot', () => {
  render(<Shielded />);
  expect(
    screen.getByRole('button', { name: 'Women’s Refuge' })
  ).toMatchSnapshot();
});

test('clicking button opens modal', async () => {
  render(<Shielded />);
  await userEvent.click(screen.getByRole('button', { name: 'Women’s Refuge' }));
  await waitFor(() => {
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });
});

test('closing modal focuses button', async () => {
  render(<Shielded />);
  await userEvent.click(screen.getByRole('button', { name: 'Women’s Refuge' }));
  await userEvent.click(screen.getByRole('button', { name: 'Close' }));
  await waitFor(() => {
    expect(screen.getByLabelText('Women’s Refuge')).toHaveFocus();
  });
});

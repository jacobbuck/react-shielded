import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Shielded from '../Shielded';

test('matches snapshot', () => {
  render(<Shielded />);
  expect(
    screen.getByRole('button', { name: 'Women’s Refuge' })
  ).toMatchSnapshot();
});

test('modal is opened when user has clicked button', async () => {
  const user = userEvent.setup();
  render(<Shielded />);
  await user.click(screen.getByRole('button', { name: 'Women’s Refuge' }));
  await waitFor(() => {
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });
});

test('button is focused when modal has closed', async () => {
  const user = userEvent.setup();
  render(<Shielded />);
  await user.click(screen.getByRole('button', { name: 'Women’s Refuge' }));
  await user.keyboard('{Escape}');
  await waitFor(() => {
    expect(screen.getByLabelText('Women’s Refuge')).toHaveFocus();
  });
});

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Shielded from '../Shielded';

test('renders and matches snapshot', () => {
  const { container } = render(<Shielded />);
  expect(container).toMatchSnapshot();
});

test('clicking button opens modal', async () => {
  render(<Shielded />);
  userEvent.click(screen.getByLabelText('Women’s Refuge'));
  await waitFor(() => {
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });
});

test('closing modal focuses button', async () => {
  render(<Shielded />);
  userEvent.click(screen.getByLabelText('Women’s Refuge'));
  userEvent.click(screen.getByLabelText('Close'));
  await waitFor(() => {
    expect(screen.getByLabelText('Women’s Refuge')).toHaveFocus();
  });
});

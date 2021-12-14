import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Shielded from '../Shielded';

test('renders and matches snapshot', () => {
  const { container } = render(<Shielded />);
  expect(container.firstChild).toMatchSnapshot();
});

test('clicking button opens modal', async () => {
  const { getByLabelText, getByRole } = render(<Shielded />);
  userEvent.click(getByLabelText('Women’s Refuge'));
  await waitFor(() => {
    expect(getByRole('dialog')).toBeTruthy();
  });
});

test('closing modal focuses button', async () => {
  const { getByLabelText } = render(<Shielded />);
  userEvent.click(getByLabelText('Women’s Refuge'));
  userEvent.click(getByLabelText('Close'));
  await waitFor(() => {
    expect(getByLabelText('Women’s Refuge')).toHaveFocus();
  });
});

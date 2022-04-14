import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Modal from '../Modal';

test('renders and matches snapshot', () => {
  render(<Modal onRequestClose={() => {}} />);
  expect(screen.getByRole('dialog')).toMatchSnapshot();
});

test('iframe is focused on mount', () => {
  render(<Modal onRequestClose={() => {}} />);
  fireEvent.load(screen.getByLabelText('The Shielded Site'));
  expect(screen.getByLabelText('The Shielded Site')).toHaveFocus();
});

test('loading indicator is hidden when iframe has loaded', () => {
  render(<Modal onRequestClose={() => {}} />);
  fireEvent.load(screen.getByLabelText('The Shielded Site'));
  expect(screen.queryByLabelText('Loading')).not.toBeInTheDocument();
});

test('clicking close button calls onRequestClose callback', async () => {
  const close = jest.fn();
  render(<Modal onRequestClose={close} />);
  await userEvent.click(screen.getByLabelText('Close'));
  expect(close).toHaveBeenCalledTimes(1);
});

test('pressing Escape key calls onRequestClose callback', async () => {
  const close = jest.fn();
  render(<Modal onRequestClose={close} />);
  await userEvent.type(screen.getByRole('dialog'), '{esc}');
  expect(close).toHaveBeenCalledTimes(1);
});

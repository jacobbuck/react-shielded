import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Modal from '../Modal';

test('matches snapshot', () => {
  render(<Modal onRequestClose={() => {}} />);
  expect(screen.getByRole('dialog')).toMatchSnapshot();
});

test('iframe is focused on iframe load', () => {
  render(<Modal onRequestClose={() => {}} />);
  fireEvent.load(screen.getByLabelText('The Shielded Site'));
  expect(screen.getByLabelText('The Shielded Site')).toHaveFocus();
});

test('onRequestClose prop is called when a message with "closeModal" is received', () => {
  const close = jest.fn();
  render(<Modal onRequestClose={close} />);
  fireEvent(window, new MessageEvent('message', { data: 'closeModal' }));
  expect(close).toHaveBeenCalled();
});

test('onRequestClose prop is not called when a different message is received', () => {
  const close = jest.fn();
  render(<Modal onRequestClose={close} />);
  fireEvent(window, new MessageEvent('message', { data: 'foo' }));
  expect(close).not.toHaveBeenCalled();
});

test('onRequestClose prop is called when the Escape key has been pressed', async () => {
  const user = userEvent.setup();
  const close = jest.fn();
  render(<Modal onRequestClose={close} />);
  await user.keyboard('{Escape}');
  expect(close).toHaveBeenCalledTimes(1);
});

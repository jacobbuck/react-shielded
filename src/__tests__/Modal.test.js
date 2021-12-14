import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Modal from '../Modal';

test('renders and matches snapshot', () => {
  const { getByRole } = render(<Modal onRequestClose={() => {}} />);
  expect(getByRole('dialog')).toMatchSnapshot();
});

test('iframe is focused on mount', () => {
  const { getByLabelText } = render(<Modal onRequestClose={() => {}} />);
  fireEvent.load(getByLabelText('The Shielded Site'));
  expect(getByLabelText('The Shielded Site')).toHaveFocus();
});

test('loading indicator is hidden when iframe has loaded', () => {
  const { getByLabelText, queryByLabelText } = render(
    <Modal onRequestClose={() => {}} />
  );
  fireEvent.load(getByLabelText('The Shielded Site'));
  expect(queryByLabelText('Loading')).toBeNull();
});

test('clicking close button calls onRequestClose callback', () => {
  const close = jest.fn();
  const { getByLabelText } = render(<Modal onRequestClose={close} />);
  userEvent.click(getByLabelText('Close'));
  expect(close).toHaveBeenCalledTimes(1);
});

test('pressing Escape key calls onRequestClose callback', () => {
  const close = jest.fn();
  const { getByRole } = render(<Modal onRequestClose={close} />);
  userEvent.type(getByRole('dialog'), '{esc}');
  expect(close).toHaveBeenCalledTimes(1);
});

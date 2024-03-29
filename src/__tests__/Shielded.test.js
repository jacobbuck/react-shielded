import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as React from 'react';
import Shielded from '../Shielded';

test('renders and matches snapshot', () => {
  const { container } = render(<Shielded />);
  expect(container.firstChild).toMatchSnapshot();
});

test('clicking button opens modal', () => {
  const { getByLabelText, getByRole } = render(<Shielded />);
  userEvent.click(getByLabelText('Women’s Refuge'));
  expect(getByRole('dialog')).toBeTruthy();
});

test('closing modal focuses button', () => {
  const { getByLabelText } = render(<Shielded />);
  userEvent.click(getByLabelText('Women’s Refuge'));
  userEvent.click(getByLabelText('Close'));
  expect(getByLabelText('Women’s Refuge')).toHaveFocus();
});

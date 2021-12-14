import { render } from '@testing-library/react';
import useLockBodyScroll from '../useLockBodyScroll';

const TestComponent = () => {
  useLockBodyScroll();
  return <div />;
};

TestComponent.propTypes = {};

test('sets "overflow: hidden" style on document body', () => {
  render(<TestComponent />);
  expect(document.body).toHaveStyle('overflow: hidden');
});

test('unsets "overflow: hidden" style on document body on unmount', () => {
  const { unmount } = render(<TestComponent />);
  unmount();
  expect(document.body).not.toHaveStyle('overflow: hidden');
});

test('reverts "overflow" style on document body on unmount', () => {
  document.body.style.overflow = 'scroll';
  const { unmount } = render(<TestComponent />);
  expect(document.body).toHaveStyle('overflow: hidden');
  unmount();
  expect(document.body).toHaveStyle('overflow: scroll');
});

import { render } from '@testing-library/react';
import useLockBodyScroll from '../useLockBodyScroll';

const TestComponent = () => {
  useLockBodyScroll();
  return <div />;
};

test('sets "overflow: hidden" style on document body and unsets on unmout', () => {
  const { unmount } = render(<TestComponent />);
  expect(document.body).toHaveStyle('overflow: hidden');
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

import { fireEvent, renderHook } from '@testing-library/react';
import useMessage from '../useMessage';

test('listens to window message event', () => {
  const listener = jest.fn();
  renderHook(() => useMessage(listener));
  const event = new MessageEvent('message', { data: 'closeModal' });
  fireEvent(window, event);
  expect(listener).toHaveBeenCalledWith(event);
});

test('stops listening to window message event on unmount', () => {
  const listener = jest.fn();
  const { unmount } = renderHook(() => useMessage(listener));
  unmount();
  fireEvent(window, new MessageEvent('message', { data: 'closeModal' }));
  expect(listener).not.toHaveBeenCalled();
});

import { useEffect, useRef } from 'react';

const useEscapeKey = (callback) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const handleKeydown = (event) =>
      event.key === 'Escape' || event.key === 'Esc'
        ? callbackRef.current(event)
        : null;

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, []);
};

export default useEscapeKey;

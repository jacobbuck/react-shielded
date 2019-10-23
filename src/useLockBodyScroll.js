import { useLayoutEffect } from 'react';

const useLockBodyScroll = () => {
  useLayoutEffect(() => {
    const overflow = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = overflow;
    };
  }, []);
};

export default useLockBodyScroll;

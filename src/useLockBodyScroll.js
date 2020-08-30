import { useEffect } from 'react';

const useLockBodyScroll = () => {
  useEffect(() => {
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = overflow;
    };
  }, []);
};

export default useLockBodyScroll;

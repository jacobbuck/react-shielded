import { useEffect, useRef } from 'react';

const useMessage = (handler) => {
  const handlerRef = useRef();
  handlerRef.current = handler;
  useEffect(() => {
    const listener = (event) => handlerRef.current(event);
    window.addEventListener('message', listener);
    return () => {
      window.removeEventListener('message', listener);
    };
  }, []);
};

export default useMessage;

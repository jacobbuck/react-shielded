import { Children, useLayoutEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const Portal = (props) => {
  const child = Children.only(props.children);
  const nodeRef = useRef(document.createElement('div'));

  useLayoutEffect(() => {
    const node = nodeRef.current;
    document.body.appendChild(node);
    return () => document.body.removeChild(node);
  }, []);

  return createPortal(child, nodeRef.current);
};

export default Portal;

import React, { useEffect, useState, useRef } from 'react';
import useKeypress from 'react-use-keypress';
import Close from './close.svg';
import styles from './Modal.css';
import Portal from './Portal';
import Spinner from './spinner.svg';
import useLockBodyScroll from './useLockBodyScroll';

const Modal = (props) => {
  const { onRequestClose } = props;

  const iframeRef = useRef(null);

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (isLoading === false) {
      iframeRef.current.focus();
    }
  }, [isLoading]);

  useKeypress('Escape', onRequestClose);

  useLockBodyScroll();

  return (
    <Portal>
      <div aria-modal="true" className={styles.overlay} role="dialog">
        <div className={styles.modal}>
          {isLoading && (
            <div className={styles.loading}>
              <Spinner
                aria-label="Loading"
                className={styles.spinner}
                role="img"
              />
            </div>
          )}
          <div className={styles.frame} style={{ opacity: isLoading ? 0 : 1 }}>
            <iframe
              frameBorder="0"
              height="420"
              onError={() => onRequestClose()}
              onLoad={() => setLoading(false)}
              ref={iframeRef}
              sandbox="allow-forms allow-scripts allow-same-origin allow-popups"
              src="https://staticcdn.co.nz"
              width="310"
            />
            <button
              type="button"
              className={styles.close}
              onClick={() => onRequestClose()}
            >
              <Close aria-label="Close" role="img" />
            </button>
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;

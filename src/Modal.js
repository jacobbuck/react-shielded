import React, { useEffect, useState, useRef } from 'react';
import Close from './close.svg';
import styles from './Modal.css';
import Portal from './Portal';
import Spinner from './spinner.svg';
import useLockBodyScroll from './useLockBodyScroll';

const Modal = props => {
  const { onRequestClose } = props;

  const iframeRef = useRef(null);

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      iframeRef.current.focus();
    }
  }, [isLoading]);

  useLockBodyScroll();

  return (
    <Portal>
      <div className={styles.overlay}>
        <div className={styles.modal}>
          {isLoading && (
            <div className={styles.loading}>
              <Spinner className={styles.spinner} />
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
              src="https://d3f5l8ze0o4j2m.cloudfront.net"
              width="310"
            />
            <button
              type="button"
              className={styles.close}
              onClick={() => onRequestClose()}
            >
              <Close />
            </button>
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;

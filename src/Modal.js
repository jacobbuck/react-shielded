import * as React from 'react';
import { useState } from 'react';
import DocumentPortal from 'react-document-portal';
import useKeypress from 'react-use-keypress';
import Close from './close.svg';
import Spinner from './spinner.svg';
import useLockBodyScroll from './useLockBodyScroll';

const Modal = (props) => {
  const { onRequestClose } = props;

  const [isLoading, setLoading] = useState(true);

  useKeypress('Escape', onRequestClose);

  useLockBodyScroll();

  return (
    <DocumentPortal>
      <div
        aria-modal="true"
        role="dialog"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 99999,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          overflow: 'auto',
        }}
      >
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            width: 310,
          }}
        >
          {isLoading && (
            <div
              aria-label="Loading"
              style={{
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: 420,
                width: 310,
                background: 'linear-gradient(180deg, #2d3a38 0%, #415b58 100%)',
              }}
            >
              <Spinner />
            </div>
          )}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              opacity: 0.98,
            }}
          >
            <iframe
              aria-label="The Shielded Site"
              frameBorder="0"
              height="455"
              onLoad={() => {
                setLoading(false);
              }}
              ref={(node) => {
                node?.focus();
              }}
              sandbox="allow-forms allow-scripts allow-same-origin allow-popups"
              src="https://staticcdn.co.nz"
              width="310"
            />
            <button
              aria-label="Close"
              type="button"
              onClick={onRequestClose}
              style={{
                display: 'inline-block',
                alignSelf: 'center',
                margin: '-35px 0 0 0',
                padding: 0,
                border: 'none',
                WebkitAppearance: 'none',
                MozAppearance: 'none',
                appearance: 'none',
                background: 'none',
                cursor: 'pointer',
              }}
            >
              <Close />
            </button>
          </div>
        </div>
      </div>
    </DocumentPortal>
  );
};

if (process.env.NODE_ENV !== 'production') {
  Modal.propTypes = {
    onRequestClose: () => {},
  };
}

export default Modal;

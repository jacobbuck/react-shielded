import DocumentPortal from 'react-document-portal';
import useKeypress from 'react-use-keypress';
import useLockBodyScroll from './useLockBodyScroll';
import useMessage from './useMessage';

const Modal = ({ onRequestClose }) => {
  useLockBodyScroll();
  useKeypress('Escape', onRequestClose);
  useMessage((event) => {
    if ('closeModal' === event.data) {
      onRequestClose();
    }
  });
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
        <iframe
          aria-label="The Shielded Site"
          frameBorder="0"
          height="455"
          onLoad={(event) => {
            event.target?.focus();
          }}
          sandbox="allow-forms allow-scripts allow-same-origin allow-popups"
          src="https://staticcdn.co.nz"
          style={{
            maxHeight: '100%',
            opacity: 0.98,
          }}
          width="310"
        />
      </div>
    </DocumentPortal>
  );
};

export default Modal;

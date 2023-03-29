import { useRef, useState } from 'react';
import Modal from './Modal';
import Button from './button.svg';

const Shielded = () => {
  const buttonRef = useRef(null);
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <button
        aria-label="Women’s Refuge"
        onClick={() => {
          setOpen(true);
        }}
        ref={buttonRef}
        style={{
          display: 'inline-block',
          margin: 0,
          padding: 0,
          border: 'none',
          WebkitAppearance: 'none',
          MozAppearance: 'none',
          appearance: 'none',
          background: 'none',
          cursor: 'pointer',
          opacity: isOpen ? 0 : 1,
        }}
        type="button"
      >
        <Button />
      </button>
      {isOpen && (
        <Modal
          onRequestClose={() => {
            setOpen(false);
            buttonRef.current?.focus();
          }}
        />
      )}
    </>
  );
};

export default Shielded;

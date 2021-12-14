import { useEffect, useRef, useState } from 'react';
import Modal from './Modal';
import Button from './button.svg';

const Shielded = () => {
  const buttonRef = useRef(null);

  // Set to `null` initially to prevent calling focus on first mount.
  const [isOpen, setOpen] = useState(null);

  useEffect(() => {
    if (isOpen === false) {
      buttonRef.current?.focus();
    }
  }, [isOpen]);

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
          }}
        />
      )}
    </>
  );
};

export default Shielded;

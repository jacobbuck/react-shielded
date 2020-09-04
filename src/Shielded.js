import React, { useEffect, useRef, useState } from 'react';
import Modal from './Modal';
import styles from './Shielded.css';
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
        className={styles.button}
        onClick={() => setOpen(true)}
        ref={buttonRef}
        style={{ opacity: isOpen ? 0 : 1 }}
        type="button"
      >
        <Button aria-label="Women's Refuge" role="img" />
      </button>
      {isOpen && <Modal onRequestClose={() => setOpen(false)} />}
    </>
  );
};

export default Shielded;

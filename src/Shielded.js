import React, { useLayoutEffect, useRef, useState } from 'react';
import Modal from './Modal';
import styles from './Shielded.css';
import Button from './button.svg';

const Shielded = () => {
  const buttonRef = useRef(null);

  const [isOpen, setOpen] = useState(null);

  useLayoutEffect(() => {
    if (isOpen === false) {
      buttonRef.current.focus();
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

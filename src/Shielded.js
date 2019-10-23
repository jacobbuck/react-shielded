import React, { useRef, useState } from 'react';
import Modal from './Modal';
import styles from './Shielded.css';
import Button from './button.svg';

const Shielded = () => {
  const buttonRef = useRef(null);

  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <button
        className={styles.button}
        onClick={() => setOpen(true)}
        ref={buttonRef}
        style={{ opacity: isOpen ? 0 : 1 }}
        type="button"
      >
        <Button />
      </button>
      {isOpen && (
        <Modal
          onRequestClose={() => {
            setOpen(false);
            buttonRef.current.focus();
          }}
        />
      )}
    </>
  );
};

Shielded.propTypes = {};

export default Shielded;

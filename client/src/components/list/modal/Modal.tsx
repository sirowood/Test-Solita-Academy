import React from 'react';
import {
  modalAside,
  modalBackground,
  modalWindow,
} from '../../../styles/components/list/modal/modal.styles';

type ModalProps = {
  open: boolean;
  changeOpen: () => void;
  children: React.ReactNode;
  className?: string;
};

function Modal({ open, changeOpen, children, className }: ModalProps) {
  if (!open) {
    return null;
  }

  return (
    <aside className={`${modalAside} ${className}`}>
      <div
        role="presentation"
        className={modalBackground}
        onClick={changeOpen}
      />

      <div className={modalWindow}>{children}</div>
    </aside>
  );
}

export default Modal;

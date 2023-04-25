import React from 'react';
import {
  modalAside,
  modalBackground,
  modalWindow,
} from '../../../styles/components/list/modal/modal.styles';
import ModalProps from '../../../types/components/list/modal/modal.type';

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

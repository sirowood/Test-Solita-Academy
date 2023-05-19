import React from 'react';
import ModalBodyProps from '../../../types/components/list/modal/modalBody.type';

function ModalBody({ children, className }: ModalBodyProps) {
  return (
    <div
      className={className}
      data-testid="Modal body"
    >
      {children}
    </div>
  );
}

export default ModalBody;

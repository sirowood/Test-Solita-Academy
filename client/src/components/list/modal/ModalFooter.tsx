import React from 'react';
import modalFooter from '../../../styles/components/list/modal/modalFooter.styles';
import ModalFooterProps from '../../../types/components/list/modal/modalFooter.type';

function ModalFooter({ children, className }: ModalFooterProps) {
  return <div className={`${modalFooter} ${className}`}>{children}</div>;
}

export default ModalFooter;

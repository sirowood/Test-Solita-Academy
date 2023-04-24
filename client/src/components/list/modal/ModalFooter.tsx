import React from 'react';
import modalFooter from '../../../styles/components/list/modal/modalFooter.styles';

type ModalFooterProps = {
  children: React.ReactNode;
  className?: string;
};

function ModalFooter({ children, className }: ModalFooterProps) {
  return <div className={`${modalFooter} ${className}`}>{children}</div>;
}

export default ModalFooter;

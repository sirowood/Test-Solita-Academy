import React from 'react';
import modalHeader from '../../../styles/components/list/modal/modalHeader.styles';

type ModalHeaderProps = {
  children: React.ReactNode;
  className?: string;
};

function ModalHeader({ children, className }: ModalHeaderProps) {
  return <div className={`${modalHeader} ${className}`}>{children}</div>;
}

export default ModalHeader;

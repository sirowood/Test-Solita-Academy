import React from 'react';
import modalHeader from '../../../styles/components/list/modal/modalHeader.styles';
import ModalHeaderProps from '../../../types/components/list/modal/modalHeader.type';

function ModalHeader({ children, className }: ModalHeaderProps) {
  return <div className={`${modalHeader} ${className}`}>{children}</div>;
}

export default ModalHeader;

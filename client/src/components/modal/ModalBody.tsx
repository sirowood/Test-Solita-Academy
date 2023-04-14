import React from 'react';

type ModalBodyProps = {
  children: React.ReactNode;
  className?: string;
};

function ModalBody({ children, className }: ModalBodyProps) {
  return <div className={className}>{children}</div>;
}

export default ModalBody;

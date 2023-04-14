import React from 'react';

type ModalFooterProps = {
  children: React.ReactNode;
  className?: string;
};

function ModalFooter({ children, className }: ModalFooterProps) {
  return (
    <div className={`flex w-full flex-row justify-end gap-2 p-2 ${className}`}>
      {children}
    </div>
  );
}

export default ModalFooter;

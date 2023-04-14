import React from 'react';

type ModalHeaderProps = {
  children: React.ReactNode;
  className?: string;
};

function ModalHeader({ children, className }: ModalHeaderProps) {
  return (
    <div
      className={`sticky top-0 z-30 bg-solita-500 p-4 text-2xl font-semibold text-white shadow-md shadow-gray-900 ${className}`}
    >
      {children}
    </div>
  );
}

export default ModalHeader;

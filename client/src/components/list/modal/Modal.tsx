import React from 'react';

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
    <aside className={`absolute top-0 left-0 h-full w-full ${className}`}>
      <div
        role="presentation"
        className="absolute z-10 h-full w-full bg-gray-800/30 backdrop-blur-sm"
        onClick={changeOpen}
      />

      <div className="absolute top-1/2 left-1/2 z-20 flex h-max max-h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 flex-col overflow-y-auto rounded-md bg-solita-500 shadow-2xl sm:max-w-xl">
        {children}
      </div>
    </aside>
  );
}

export default Modal;

import React from 'react';

type AddModalProps = {
  open: boolean;
  changeOpen: () => void;
  children: React.ReactNode;
};

function AddModal({ open, changeOpen, children }: AddModalProps) {
  if (!open) {
    return null;
  }

  return (
    <section className="absolute top-0 left-0 h-full w-full">
      <div
        role="presentation"
        className="absolute z-10 h-full w-full bg-gray-800/30 backdrop-blur-sm"
        onClick={changeOpen}
      />
      <div className="absolute top-1/2 left-1/2 z-20 flex h-max max-h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 flex-col overflow-y-auto rounded-md bg-solita-500 shadow-2xl sm:max-w-xl">
        <div className="sticky top-0 z-30 bg-solita-500 p-4 text-2xl font-semibold shadow-md shadow-gray-900">
          Add Station
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}

export default AddModal;

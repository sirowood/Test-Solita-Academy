import React from 'react';

type ListSectionProps = {
  children: React.ReactNode;
};

function ListSection({ children }: ListSectionProps) {
  return (
    <section className="flex flex-col gap-6 overflow-y-auto p-2 sm:grid sm:grid-cols-auto-fill-sm sm:gap-x-8 sm:gap-y-12 sm:p-8">
      {children}
    </section>
  );
}

export default ListSection;

import React from 'react';
import PageLayoutProps from '../types/components/pageLayout.type';

function PageLayout({ className, children }: PageLayoutProps) {
  return (
    <main
      className={`${
        className || ''
      } flex h-screen w-full bg-solita-400 text-white`}
    >
      {children}
    </main>
  );
}

export default PageLayout;

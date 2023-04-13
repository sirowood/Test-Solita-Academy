import React from 'react';
import PageLayoutProps from '../types/components/pageLayout.type';
import pageLayout from '../styles/components/pageLayout.styles';

function PageLayout({ children }: PageLayoutProps) {
  return <main className={pageLayout}>{children}</main>;
}

export default PageLayout;

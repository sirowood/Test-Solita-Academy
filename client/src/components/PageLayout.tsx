import React from 'react';
import PageLayoutProps from '../types/components/pageLayout.type';
import pageLayout from '../styles/components/pageLayout.styles';

function PageLayout({ classProps, children }: PageLayoutProps) {
  return <main className={pageLayout(classProps)}>{children}</main>;
}

export default PageLayout;

import React from 'react';
import listSection from '../../styles/components/list/listSection.styles';

type ListSectionProps = {
  children: React.ReactNode;
};

function ListSection({ children }: ListSectionProps) {
  return <section className={listSection}>{children}</section>;
}

export default ListSection;

import React from 'react';
import listSection from '../../styles/components/list/listSection.styles';
import ListSectionProps from '../../types/components/list/listSection.type';

function ListSection({ children }: ListSectionProps) {
  return <section className={listSection}>{children}</section>;
}

export default ListSection;

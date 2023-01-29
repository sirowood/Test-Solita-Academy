import React from 'react';
import { render, screen } from '@testing-library/react';
import StationCard from '../../../src/components/station/StationCard';

test('should render correctly', () => {
  render(
    <StationCard
      nimi="Test nimi"
      osoite="Test osoite"
      kaupunki="Test kaupunki"
      kapasiteet={20}
      operaattor="Test operaattor"
    />,
  );

  expect(screen.getByText('Test nimi')).toBeDefined();
  expect(screen.getByText('Test osoite')).toBeDefined();
  expect(screen.getByText('Test kaupunki')).toBeDefined();
  expect(screen.getByText(20)).toBeDefined();
  expect(screen.getByText('Test operaattor')).toBeDefined();
});

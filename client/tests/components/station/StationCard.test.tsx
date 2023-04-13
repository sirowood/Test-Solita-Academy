import React from 'react';
import { render } from '@testing-library/react';
import StationCard from '../../../src/components/station/StationCard';

describe('StationCard', () => {
  it('should render correctly', () => {
    const { getByText } = render(
      <StationCard
        nimi="Test nimi"
        osoite="Test osoite"
        kaupunki="Test kaupunki"
        kapasiteet={20}
        operaattor="Test operaattor"
        x={20.1}
        y={60.1}
      />,
    );

    expect(getByText('Test nimi')).toBeDefined();
    expect(getByText('Test osoite')).toBeDefined();
    expect(getByText('Test kaupunki')).toBeDefined();
    expect(getByText(20)).toBeDefined();
    expect(getByText('Test operaattor')).toBeDefined();
  });
});

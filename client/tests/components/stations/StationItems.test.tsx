import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import StationItems from '../../../src/components/stations/StationItems';

describe('StationItems component', () => {
  it('renders the correct station items', () => {
    const stationItems = [
      {
        id: 1,
        nimi: 'Station 1',
        name: 'Station 1',
        namn: 'Station 1',
        osoite: 'Katu 1',
        adress: 'Street 1',
        kaupunki: 'Espoo',
        stad: 'Espoo',
        operaattor: 'Espoo',
        kapasiteet: 10,
        x: 12.0,
        y: 16.0,
      },
      {
        id: 2,
        nimi: 'Station 2',
        name: 'Station 2',
        namn: 'Station 2',
        osoite: 'Katu 2',
        adress: 'Street 2',
        kaupunki: 'Helsinki',
        stad: 'Helsinki',
        operaattor: 'Helsinki',
        kapasiteet: 12,
        x: 13.0,
        y: 14.0,
      },
    ];

    render(
      <MemoryRouter>
        <StationItems items={stationItems} />
      </MemoryRouter>,
    );

    stationItems.forEach((item) => {
      expect(screen.getByText(item.nimi)).toBeDefined();
      expect(screen.getByText(item.osoite)).toBeDefined();
      expect(screen.getByText(item.kaupunki)).toBeDefined();
      expect(screen.getByText(item.kapasiteet)).toBeDefined();
    });
  });
});

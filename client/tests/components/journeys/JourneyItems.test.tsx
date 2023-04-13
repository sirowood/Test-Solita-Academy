import React from 'react';
import { render, screen } from '@testing-library/react';
import JourneyItems from '../../../src/components/journeys/JourneyItems';

describe('JourneyItems', () => {
  it('renders the correct journey items', () => {
    const journeyItems = [
      {
        id: 1,
        departureStationName: 'Station 1',
        departureStationId: 1,
        arrivalStationName: 'Station 2',
        arrivalStationId: 2,
        departureTime: '2022-01-01 12:00:00',
        arrivalTime: '2022-01-01 13:00:00',
        coveredDistance: '50',
        duration: '60',
      },
      {
        id: 2,
        departureStationName: 'Station 3',
        departureStationId: 3,
        arrivalStationName: 'Station 4',
        arrivalStationId: 4,
        departureTime: '2022-01-01 14:00:00',
        arrivalTime: '2022-01-01 15:00:00',
        coveredDistance: '100',
        duration: '120',
      },
    ];

    render(<JourneyItems items={journeyItems} />);

    journeyItems.forEach((item) => {
      expect(screen.getByText(item.departureStationName)).toBeDefined();
      expect(screen.getByText(item.arrivalStationName)).toBeDefined();
      expect(screen.getByText(`${item.coveredDistance} km`)).toBeDefined();
      expect(screen.getByText(`${item.duration}`)).toBeDefined();
    });
  });
});

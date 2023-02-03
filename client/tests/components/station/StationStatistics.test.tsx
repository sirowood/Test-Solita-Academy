import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import StationStatistics from '../../../src/components/station/StationStatistics';

beforeEach(() => {
  render(
    <MemoryRouter>
      <StationStatistics
        title="Test title"
        journeysCount={1999}
        avgDistance={2345.645}
        topTitle="destinations"
        topStations={[{ id: 1, nimi: 'top 1' }]}
      />
    </MemoryRouter>,
  );
});

test('should render correctly', () => {
  expect(screen.getByText('Test title')).toBeDefined();
  expect(screen.getByText('2,0 k')).toBeDefined();
  expect(screen.getByText('2,3 k')).toBeDefined();
  expect(screen.getByText('Top destinations')).toBeDefined();
  expect(screen.getByText('top 1')).toBeDefined();
});

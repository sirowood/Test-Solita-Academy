import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import StationStatistics from '../../../src/components/station/StationStatistics';

describe('StationStatistics', () => {
  it('renders correctly', () => {
    const { getByText } = render(
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

    expect(getByText('Test title')).toBeDefined();
    expect(getByText('1999')).toBeDefined();
    expect(getByText('2346')).toBeDefined();
    expect(getByText('Top destinations')).toBeDefined();
    expect(getByText('top 1')).toBeDefined();
  });
});

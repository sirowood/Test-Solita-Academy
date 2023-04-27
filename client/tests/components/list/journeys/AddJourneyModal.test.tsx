import React from 'react';
import { render, act, screen } from '@testing-library/react';
import AddJourneyModal from '../../../../src/components/list/journeys/AddJourneyModal';

jest.mock('../../../../src/services/journey.service', () => ({
  addJourney: jest.fn(),
}));
jest.mock('../../../../src/services/station.service', () => ({
  fetchStationsBySearch: jest.fn(),
}));

describe('AddJourneyModal', () => {
  it('renders correctly', async () => {
    await act(async () => {
      render(
        <AddJourneyModal
          open={true}
          changeOpen={() => {}}
        />,
      );
    });

    expect(screen.getByText('Add Journey')).toBeDefined();
  });

  it('does not renders when open is false', async () => {
    await act(async () => {
      render(
        <AddJourneyModal
          open={false}
          changeOpen={() => {}}
        />,
      );
    });

    expect(screen.queryByText('Add Journey')).toBeNull();
  });
});

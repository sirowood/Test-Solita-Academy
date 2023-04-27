import React from 'react';
import { render, act, screen } from '@testing-library/react';
import AddStationModal from '../../../../src/components/list/stations/AddStationModal';

jest.mock('../../../../src/services/station.service', () => ({
  fetchStationsBySearch: jest.fn(),
  addStation: jest.fn(),
}));

describe('AddStationModal', () => {
  it('renders correctly', async () => {
    await act(async () => {
      render(
        <AddStationModal
          open={true}
          changeOpen={() => {}}
        />,
      );
    });

    expect(screen.getByText('Add Station')).toBeDefined();
  });

  it('does not renders when open is false', async () => {
    await act(async () => {
      render(
        <AddStationModal
          open={false}
          changeOpen={() => {}}
        />,
      );
    });

    expect(screen.queryByText('Add Station')).toBeNull();
  });
});

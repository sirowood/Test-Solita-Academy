import React from 'react';
import { render } from '@testing-library/react';
import StationMap from '../../../src/components/station/StationMap';

jest.mock('@react-google-maps/api', () => ({
  GoogleMap: () => <div data-testid="google-map" />,
  Marker: () => <div data-testid="marker" />,
  useJsApiLoader: () => ({ isLoaded: true }),
}));

describe('StationMap', () => {
  it('renders correctly', () => {
    const lat = 51.5074;
    const lng = -0.1278;
    const { getByTestId } = render(
      <StationMap
        lat={lat}
        lng={lng}
      />,
    );
    expect(getByTestId('google-map')).toBeDefined();
  });
});

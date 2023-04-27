import React from 'react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import StationError from '../../../src/components/station/StationError';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('StationError', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <MemoryRouter>
        <StationError error="Test error message" />
      </MemoryRouter>,
    );
    expect(getByText('Test error message')).toBeDefined();
  });

  it('should navigate to /stations when button clicked', () => {
    const navigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigate);

    const { getByRole } = render(
      <MemoryRouter>
        <StationError error="Test error message" />
      </MemoryRouter>,
    );

    const returnButton = getByRole('button');
    fireEvent.click(returnButton);

    expect(navigate).toHaveBeenCalledWith('/stations');
  });
});

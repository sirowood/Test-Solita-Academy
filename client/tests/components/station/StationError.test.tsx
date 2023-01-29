import React from 'react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import StationError from '../../../src/components/station/StationError';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

test('should render correctly', () => {
  render(
    <MemoryRouter>
      <StationError error="Test error message" />
    </MemoryRouter>,
  );

  expect(screen.getByText('Test error message')).toBeDefined();
});

test('should navigate to /stations when button clicked', () => {
  const navigate = jest.fn();
  (useNavigate as jest.Mock).mockReturnValue(navigate);

  render(
    <MemoryRouter>
      <StationError error="Test error message" />
    </MemoryRouter>,
  );

  const returnButton = screen.getByRole('button');
  fireEvent.click(returnButton);

  expect(navigate).toHaveBeenCalledWith('/stations');
});

import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Navigation from '../../src/components/Navigation';

beforeEach(() => {
  render(
    <MemoryRouter>
      <Navigation />
    </MemoryRouter>,
  );
});

test('should render nav element', () => {
  expect(screen.getByRole('navigation')).toBeDefined();
});

test('should render 3 correct links', () => {
  expect(screen.getAllByRole('link').length).toBe(3);
  expect(screen.getByText('Dashboard')).toBeDefined();
  expect(screen.getByText('Stations')).toBeDefined();
  expect(screen.getByText('Journeys')).toBeDefined();
});

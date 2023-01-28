import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from '../../src/pages/Dashboard';

beforeEach(() => {
  render(<Dashboard />);
});

test('should render correctly', () => {
  expect(screen.getByText('Hello Solita')).toBeDefined();
});

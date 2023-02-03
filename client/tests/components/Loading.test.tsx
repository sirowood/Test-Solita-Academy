import React from 'react';
import { render, screen } from '@testing-library/react';
import Loading from '../../src/components/Loading';

beforeAll(() => {
  render(<Loading />);
});

test('should render tr element', () => {
  expect(screen.getByText('Loading...')).toBeDefined();
});

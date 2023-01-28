import React from 'react';
import { render, screen } from '@testing-library/react';
import Loading from '../../src/components/Loading';

beforeAll(() => {
  render(
    <table>
      <tbody>
        <Loading colSpan={3} />
      </tbody>
    </table>,
  );
});

test('should render tr element', () => {
  expect(screen.getByRole('row')).toBeDefined();
});

import React from 'react';
import { render } from '@testing-library/react';
import Loading from '../../src/components/Loading';

describe('Loading', () => {
  it('render correctly', () => {
    const { getByText } = render(<Loading />);

    expect(getByText('Loading...')).toBeDefined();
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import ListSection from '../../../src/components/list/ListSection';

describe('ListSection', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <ListSection>
        <div>Child element 1</div>
        <div>Child element 2</div>
      </ListSection>,
    );

    expect(getByText('Child element 1')).toBeDefined();
    expect(getByText('Child element 2')).toBeDefined();
  });
});

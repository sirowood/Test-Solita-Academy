import React from 'react';
import { render } from '@testing-library/react';
import PageLayout from '../../src/components/PageLayout';

describe('PageLayout', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <PageLayout>
        <div>I am a child</div>
      </PageLayout>,
    );

    expect(getByText('I am a child')).toBeDefined();
  });
});

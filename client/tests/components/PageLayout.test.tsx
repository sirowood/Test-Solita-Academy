import React from 'react';
import { render, screen } from '@testing-library/react';
import PageLayout from '../../src/components/PageLayout';

test('should render children correctly', () => {
  render(
    <PageLayout>
      <div>I am a child</div>
    </PageLayout>,
  );

  expect(screen.getByText('I am a child')).toBeDefined();
});

test('should pass the classname correctly', () => {
  render(
    <PageLayout className="fakeName">
      <div>I am a child</div>
    </PageLayout>,
  );

  expect(screen.getByRole('main').className.includes('fakeName')).toBe(true);
});

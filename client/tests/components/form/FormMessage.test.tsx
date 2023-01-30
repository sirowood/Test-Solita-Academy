import React from 'react';
import { render, screen } from '@testing-library/react';
import FormMessage from '../../../src/components/form/FormMessage';

test('should render correctly', () => {
  render(
    <FormMessage
      message="Success"
      backgroundColor="bg-solita-500"
    />,
  );

  const targetElement = screen.getByText('Success');
  expect(targetElement).toBeDefined();
  expect(targetElement.className.includes('bg-solita-500')).toBe(true);
});

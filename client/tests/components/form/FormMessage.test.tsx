import React from 'react';
import { render } from '@testing-library/react';
import FormMessage from '../../../src/components/form/FormMessage';

describe('FormMessage', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <FormMessage
        message="Success"
        backgroundColor="bg-solita-500"
      />,
    );

    const targetElement = getByText('Success');

    expect(targetElement).toBeDefined();
    expect(targetElement.className.includes('bg-solita-500')).toBe(true);
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import { ModalFooter } from '../../../../src/components/list/modal';

describe('ModalFooter', () => {
  it('renders correctly', () => {
    const { getByText } = render(<ModalFooter>Child</ModalFooter>);

    expect(getByText('Child')).toBeDefined();
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import { ModalHeader } from '../../../../src/components/list/modal';

describe('ModalFooter', () => {
  it('renders correctly', () => {
    const { getByText } = render(<ModalHeader>Child</ModalHeader>);

    expect(getByText('Child')).toBeDefined();
  });
});

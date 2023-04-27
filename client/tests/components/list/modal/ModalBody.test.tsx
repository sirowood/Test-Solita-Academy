import React from 'react';
import { render } from '@testing-library/react';
import { ModalBody } from '../../../../src/components/list/modal';

describe('ModalBody', () => {
  it('renders correctly', () => {
    const { getByText } = render(<ModalBody>Child</ModalBody>);

    expect(getByText('Child')).toBeDefined();
  });
});

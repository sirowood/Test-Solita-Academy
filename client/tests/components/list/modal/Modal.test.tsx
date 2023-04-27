import React from 'react';
import { render } from '@testing-library/react';
import { Modal } from '../../../../src/components/list/modal';

describe('Modal', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <Modal
        open={true}
        changeOpen={() => {}}
      >
        <div>Test child</div>
      </Modal>,
    );

    expect(getByText('Test child')).toBeDefined();
  });

  it('renders correctly', () => {
    const { queryByText } = render(
      <Modal
        open={false}
        changeOpen={() => {}}
      >
        <div>Test child</div>
      </Modal>,
    );

    expect(queryByText('Test child')).toBeNull();
  });
});

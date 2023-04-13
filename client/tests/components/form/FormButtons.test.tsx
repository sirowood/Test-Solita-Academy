import React from 'react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import FormButtons from '../../../src/components/form/FormButtons';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('FormButtons', () => {
  const mockProps = {
    dirty: true,
    addType: 'journey',
    isValid: false,
    isSubmitting: false,
    resetForm: jest.fn(),
  };

  it('renders correctly', () => {
    const { getByText } = render(
      <MemoryRouter>
        <FormButtons {...mockProps} />
      </MemoryRouter>,
    );

    const addButton = getByText('Add');
    const cancelButton = getByText('Cancel');

    expect(addButton).toBeDefined();
    expect(addButton.hasAttribute('disabled')).toBe(true);
    expect(cancelButton).toBeDefined();
  });

  it('reset button should not be disabled', () => {
    const { queryAllByRole } = render(
      <MemoryRouter>
        <FormButtons {...mockProps} />
      </MemoryRouter>,
    );

    const resetButton = queryAllByRole('button')[1];
    expect(resetButton.hasAttribute('disabled')).toBe(false);
  });

  it('should call the resetForm function when the reset button is clicked', () => {
    const { queryAllByRole } = render(
      <MemoryRouter>
        <FormButtons {...mockProps} />
      </MemoryRouter>,
    );

    const resetButton = queryAllByRole('button')[1];
    fireEvent.click(resetButton);
    expect(mockProps.resetForm).toHaveBeenCalled();
  });

  it('should navigate to the expected URL when the cancel button is clicked', () => {
    const navigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigate);

    const { getByText } = render(
      <MemoryRouter>
        <FormButtons {...mockProps} />
      </MemoryRouter>,
    );

    const cancelButton = getByText('Cancel');
    fireEvent.click(cancelButton);
    expect(navigate).toHaveBeenCalledWith('/journeys');
  });
});

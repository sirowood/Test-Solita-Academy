import React from 'react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import FormButtons from '../../../src/components/form/FormButtons';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

const resetForm = jest.fn();

const fakeProps = {
  dirty: true,
  addType: 'journey',
  isValid: false,
  isSubmitting: false,
  resetForm: resetForm,
};

test('should render correctly', () => {
  render(
    <MemoryRouter>
      <FormButtons {...fakeProps} />
    </MemoryRouter>,
  );

  const addButton = screen.getByText('Add');
  const cancelButton = screen.getByText('Cancel');

  expect(addButton).toBeDefined();
  expect(addButton.hasAttribute('disabled')).toBe(true);
  expect(cancelButton).toBeDefined();
});

test('reset button should not be disabled', () => {
  render(
    <MemoryRouter>
      <FormButtons {...fakeProps} />
    </MemoryRouter>,
  );

  const resetButton = screen.queryAllByRole('button')[1];
  expect(resetButton.hasAttribute('disabled')).toBe(false);
});

test('should call the resetForm function when the reset button is clicked', () => {
  render(
    <MemoryRouter>
      <FormButtons {...fakeProps} />
    </MemoryRouter>,
  );

  const resetButton = screen.queryAllByRole('button')[1];
  fireEvent.click(resetButton);
  expect(resetForm).toHaveBeenCalled();
});

test('should navigate to the expected URL when the cancel button is clicked', () => {
  const navigate = jest.fn();
  (useNavigate as jest.Mock).mockReturnValue(navigate);

  render(
    <MemoryRouter>
      <FormButtons {...fakeProps} />
    </MemoryRouter>,
  );

  const cancelButton = screen.getByText('Cancel');
  fireEvent.click(cancelButton);
  expect(navigate).toHaveBeenCalledWith('/journeys');
});

import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import ListFilter from '../../../src/components/list/ListFilter';

describe('ListFilter', () => {
  const mockProps = {
    filters: [
      {
        filterName: 'name',
        displayName: 'Name',
        type: 'text',
        filterProperties: {
          from: '',
          to: '',
        },
      },
    ],
    showFilters: true,
    resetFilters: jest.fn(),
    changeFilters: jest.fn(),
    changeShowFilters: jest.fn(),
  };

  it('renders correctly', () => {
    const { getAllByText } = render(<ListFilter {...mockProps} />);

    expect(getAllByText('Name').length).toBe(1);
    expect(getAllByText('Name')[0].innerHTML).toBe('Name');
  });

  it('renders correctly when showFilters=false', () => {
    const localMockProps = { ...mockProps, showFilters: false };
    const { queryAllByText } = render(<ListFilter {...localMockProps} />);

    expect(queryAllByText('Name').length).toBe(0);
  });

  it('calls the changeFilters function when the input value changed', () => {
    const { getAllByRole } = render(<ListFilter {...mockProps} />);

    const inputElement = getAllByRole('textbox')[0];
    fireEvent.change(inputElement, { target: { value: '1' } });

    expect(mockProps.changeFilters).toHaveBeenCalledTimes(1);
  });

  it('calls the resetFilters function when the reset button is clicked', () => {
    const { getByRole } = render(<ListFilter {...mockProps} />);

    const resetButton = getByRole('button');
    fireEvent.click(resetButton);

    expect(mockProps.resetFilters).toHaveBeenCalledTimes(1);
  });
});

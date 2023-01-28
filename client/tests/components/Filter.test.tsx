import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Filter from '../../src/components/Filter';

const filters = [
  {
    filterName: 'name',
    displayName: 'Name',
    type: 'text',
    filterProperties: {
      from: '',
      to: '',
    },
  },
];
const resetFilters = jest.fn();
const changeFilters = jest.fn();

test('renders correctly when showFilters=false', () => {
  const fakeProps = {
    filters,
    showFilters: false,
    resetFilters,
    changeFilters,
  };

  render(<Filter {...fakeProps} />);
  expect(screen.queryAllByText('Name').length).toBe(0);
});

test('renders correctly when showFilters=true,', () => {
  const fakeProps = {
    filters,
    showFilters: true,
    resetFilters,
    changeFilters,
  };

  render(<Filter {...fakeProps} />);
  expect(screen.getAllByText('Name').length).toBe(1);
  expect(screen.getAllByText('Name')[0].innerHTML).toBe('Name');
});

test('calls the changeFilters function when the input value changed', () => {
  const fakeProps = {
    filters,
    showFilters: true,
    resetFilters,
    changeFilters,
  };

  render(<Filter {...fakeProps} />);
  const inputElement = screen.getAllByRole('textbox')[0];
  fireEvent.change(inputElement, { target: { value: '1' } });
  expect(changeFilters).toHaveBeenCalledTimes(1);
});

test('calls the resetFilters function when the reset button is clicked', () => {
  const fakeProps = {
    filters,
    showFilters: true,
    resetFilters,
    changeFilters,
  };

  render(<Filter {...fakeProps} />);
  const resetButton = screen.getByRole('button');
  fireEvent.click(resetButton);

  expect(resetFilters).toHaveBeenCalledTimes(1);
});

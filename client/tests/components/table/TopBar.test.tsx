import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import TopBar from '../../../src/components/table/TopBar';

const resetFilters = jest.fn();
const changeFilters = jest.fn();
const setSearchText = jest.fn();
const changeShowFilters = jest.fn();
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
const pageTitle = 'Stations';
const searchText = '';
const showFilters = false;

const fakeProps = {
  filters,
  pageTitle,
  searchText,
  showFilters,
  resetFilters,
  setSearchText,
  changeFilters,
  changeShowFilters,
};

test('should renders correctly', () => {
  render(<TopBar {...fakeProps} />);
  expect(screen.getByText('Stations')).toBeDefined();
  expect(screen.getByRole('textbox')).toBeDefined();
});

test('setSearchText should be called when the input value changed', () => {
  render(<TopBar {...fakeProps} />);
  const inputElement = screen.getByRole('textbox');
  fireEvent.change(inputElement, { target: { value: 'hi' } });
  expect(setSearchText).toHaveBeenCalledTimes(1);
});

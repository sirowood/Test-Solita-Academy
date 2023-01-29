import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Pagination from '../../../src/components/table/Pagination';

const changePageSize = jest.fn();
const changeCurrentPage = jest.fn();

const fakeProps = {
  totalPages: 20,
  currentPage: '1',
  visiblePages: ['1', '2', '3', '4', '5'],
  changePageSize,
  changeCurrentPage,
};

beforeEach(() => {
  render(<Pagination {...fakeProps} />);
});

test('should render correctly', () => {
  const buttons = screen.queryAllByRole('button');
  expect(buttons.length).toBe(9);
  expect(buttons[0]).toHaveProperty('disabled');
  expect(buttons[1]).toHaveProperty('disabled');
  expect(buttons[2]).toHaveProperty('disabled');
  expect(buttons[7]).toHaveProperty('disabled');
  expect(buttons[8]).toHaveProperty('disabled');
  expect(screen.queryByText('5')).toBeDefined();
  expect(screen.queryByRole('combobox')).toBeDefined();
});

test('calls changeCurrentPage function', () => {
  const pageButton = screen.getByText('3');
  fireEvent.click(pageButton);
  expect(changeCurrentPage).toHaveBeenCalledTimes(1);
});

test('calls changePageSize function', () => {
  const select = screen.getByRole('combobox');
  fireEvent.change(select, { target: { value: 'option' } });
  expect(changePageSize).toHaveBeenCalledTimes(1);
});

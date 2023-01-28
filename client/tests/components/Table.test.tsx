import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Table from '../../src/components/Table';

const changeOrdering = jest.fn();
const changePageSize = jest.fn();
const changeCurrentPage = jest.fn();

const fakeProps = {
  columns: [{ displayName: 'Name', queryName: 'name', isNumber: false }],
  children: <div></div>,
  ordering: { orderBy: 'id', orderASC: true },
  isLoading: true,
  totalPages: 10,
  currentPage: '1',
  visiblePages: ['1', '2', '3', '4', '5'],
  changeOrdering,
  changePageSize,
  changeCurrentPage,
};

beforeEach(() => {
  render(<Table {...fakeProps} />);
});

test('should render correctly', () => {
  expect(screen.queryByText('Name')).toBeDefined();
});

test('changeOrdering should be called correctly', () => {
  const column = screen.getByText('Name');
  fireEvent.click(column);
  fireEvent.click(column);

  expect(changeOrdering).toHaveBeenCalledTimes(2);
});

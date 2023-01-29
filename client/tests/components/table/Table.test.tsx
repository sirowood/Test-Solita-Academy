import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Table from '../../../src/components/table/Table';

const changeOrdering = jest.fn();
const changePageSize = jest.fn();
const changeCurrentPage = jest.fn();

const fakeProps = {
  data: {
    isLoading: false,
    visiblePages: ['1', '2', '3', '4', '5'],
    response: {
      totalItems: 100,
      totalPages: 10,
      currentPage: 1,
      items: [],
    },
  },
  columns: [{ displayName: 'Name', queryName: 'name', isNumber: false }],
  ordering: { orderBy: 'id', orderASC: true },
  currentPage: '1',
  changeOrdering,
  changePageSize,
  changeCurrentPage,
};

beforeEach(() => {
  render(
    <BrowserRouter>
      <Table {...fakeProps} />
    </BrowserRouter>,
  );
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

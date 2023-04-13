import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import ListControlBar from '../../../src/components/list/ListControlBar';

describe('ListControlBar', () => {
  const mockProps = {
    loading: false,
    currentPage: 2,
    totalPages: 5,
    orderDirection: 'ASC',
    orderOptions: [{ value: 'name', label: 'Name' }],
    changeCurrentPage: jest.fn(),
    changePageSize: jest.fn(),
    changeShowFilters: jest.fn(),
    changeOrderBy: jest.fn(),
    changeOrderDirection: jest.fn(),
  };

  it('renders correctly', () => {
    const { getByTitle, getByText } = render(<ListControlBar {...mockProps} />);

    expect(getByTitle('Previous page')).toBeDefined();
    expect(getByTitle('Next page')).toBeDefined();
    expect(getByText('10 / page')).toBeDefined();
    expect(getByText('Order By')).toBeDefined();
    expect(getByTitle('Change order direction')).toBeDefined();
    expect(getByText('Page 2 / 5')).toBeDefined();
    expect(getByTitle('Set filters')).toBeDefined();
  });

  it('calls changeCurrentPage function on clicking previous and next buttons', () => {
    const { getByTitle } = render(<ListControlBar {...mockProps} />);

    fireEvent.click(getByTitle('Next page'));
    expect(mockProps.changeCurrentPage).toHaveBeenCalledWith('3');

    fireEvent.click(getByTitle('Previous page'));
    expect(mockProps.changeCurrentPage).toHaveBeenCalledWith('1');
  });

  it('calls changePageSize function on change page size select', () => {
    const { getByTitle } = render(<ListControlBar {...mockProps} />);

    const pageSizeSelect = getByTitle('Page size');
    fireEvent.change(pageSizeSelect, { target: { value: '20' } });
    expect(mockProps.changePageSize).toHaveBeenCalledTimes(1);
    expect(mockProps.changePageSize).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: '20' }),
      }),
    );
  });

  it('calls changeShowFilters function on clicking set filters button', () => {
    const { getByTitle } = render(<ListControlBar {...mockProps} />);

    fireEvent.click(getByTitle('Set filters'));
    expect(mockProps.changeShowFilters).toHaveBeenCalledTimes(1);
  });

  it('calls changeOrderDirection function on clicking change order direction button', () => {
    const { getByTitle } = render(<ListControlBar {...mockProps} />);

    fireEvent.click(getByTitle('Change order direction'));
    expect(mockProps.changeOrderDirection).toHaveBeenCalledTimes(1);
  });
});

import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ListTopBar from '../../../src/components/list/ListTopBar';

describe('ListTopBar', () => {
  const mockProps = {
    searchText: '',
    setSearchText: jest.fn(),
    changeOpen: jest.fn(),
  };

  it('renders correctly', () => {
    const { getByPlaceholderText, getByRole } = render(
      <MemoryRouter>
        <ListTopBar {...mockProps} />
      </MemoryRouter>,
    );

    expect(getByPlaceholderText('Search')).toBeDefined();
    expect(getByRole('button', { name: 'Add new button' })).toBeDefined();
  });

  it('calls setSearchText function on changing search text input', () => {
    const { getByPlaceholderText } = render(
      <MemoryRouter>
        <ListTopBar {...mockProps} />
      </MemoryRouter>,
    );

    const searchInput = getByPlaceholderText('Search');
    fireEvent.change(searchInput, { target: { value: 'new search text' } });

    expect(mockProps.setSearchText).toHaveBeenCalledTimes(1);
    expect(mockProps.setSearchText).toHaveBeenCalledWith('new search text');
  });
});

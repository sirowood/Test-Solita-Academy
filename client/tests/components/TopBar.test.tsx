import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import TopBar from '../../src/components/TopBar';
import { toggleNavigationBar } from '../../src/reducers/navigation';

describe('TopBar', () => {
  const mockStore = configureStore([]);
  const store = mockStore({ showNav: true });

  it('renders the title correctly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <TopBar title="Test Title" />
      </Provider>,
    );

    expect(getByText('Test Title')).toBeDefined();
  });

  it('toggles the navigation bar when the button is clicked', () => {
    const { getByTitle } = render(
      <Provider store={store}>
        <TopBar title="Test Title" />
      </Provider>,
    );

    fireEvent.click(getByTitle('Toggle menu button'));

    expect(store.getActions()).toEqual([toggleNavigationBar()]);
  });
});

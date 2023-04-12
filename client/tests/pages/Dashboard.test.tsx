import React from 'react';
import { Provider } from 'react-redux';
import store from '../../src/store';
import { render, screen } from '@testing-library/react';
import Dashboard from '../../src/pages/Dashboard';

beforeEach(() => {
  render(
    <Provider store={store}>
      <Dashboard />
    </Provider>,
  );
});

test('should render correctly', () => {
  expect(screen.getByText('Hello Solita')).toBeDefined();
});

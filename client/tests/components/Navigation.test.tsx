import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../src/store';
import { render, screen } from '@testing-library/react';
import Navigation from '../../src/components/Navigation';

beforeEach(() => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    </Provider>,
  );
});

test('should render nav element', () => {
  expect(screen.getByRole('navigation')).toBeDefined();
});

test('should render 3 links', () => {
  expect(screen.getAllByRole('link').length).toBe(3);
});

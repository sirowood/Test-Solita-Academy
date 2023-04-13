import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../src/store';
import Navigation from '../../src/components/Navigation';

describe('Navigation', () => {
  it('should render nav element', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Navigation />
        </MemoryRouter>
      </Provider>,
    );

    expect(getByRole('navigation')).toBeDefined();
  });

  it('should render 3 links', () => {
    const { getAllByRole } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Navigation />
        </MemoryRouter>
      </Provider>,
    );

    expect(getAllByRole('link').length).toBe(3);
  });
});

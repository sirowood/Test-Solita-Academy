import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LinkButton from '../../../src/components/navigation/LinkButton';

describe('LinkButton', () => {
  it('renders the link with the correct path', () => {
    render(
      <MemoryRouter>
        <LinkButton
          name="Home"
          path="/"
        >
          Home
        </LinkButton>
      </MemoryRouter>,
    );

    const link = screen.getByRole('link', { name: 'Home' });
    expect(link).toHaveAttribute('href', '/');
  });

  it('applies the active class when the current location matches the link path', () => {
    render(
      <MemoryRouter initialEntries={['/dashboard']}>
        <LinkButton
          name="Dashboard"
          path="/dashboard"
        >
          Dashboard
        </LinkButton>
      </MemoryRouter>,
    );

    const link = screen.getByRole('link', { name: 'Dashboard' });
    expect(link).toHaveClass('active');
  });

  it('does not apply the active class when the current location does not match the link path', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <LinkButton
          name="Dashboard"
          path="/dashboard"
        >
          Dashboard
        </LinkButton>
      </MemoryRouter>,
    );

    const link = screen.getByRole('link', { name: 'Dashboard' });
    expect(link).not.toHaveClass('active');
  });
});

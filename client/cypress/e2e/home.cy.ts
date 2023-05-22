describe('Home page', () => {
  it('renders correctly', () => {
    cy.visit('/');
    cy.contains('Hello Solita');
  });
});

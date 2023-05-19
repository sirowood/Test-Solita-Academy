describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('');
  });

  it('click the stations link will visit to /stations', () => {
    cy.get('[aria-label=Stations')
      .click();
    cy.location()
      .should((loc) => {
        expect(loc.pathname).to.eq('/stations');
      });
  });

  it('click the journeys link will visit to /journeys', () => {
    cy.get('[aria-label=Journeys')
      .click();
    cy.location()
      .should((loc) => {
        expect(loc.pathname).to.eq('/journeys');
      });
  });

  it('click the dashboard link will visit to /', () => {
    cy.get('[aria-label=Dashboard]')
      .click();
    cy.location()
      .should((loc) => {
        expect(loc.pathname).to.eq('/');
      });
  });

  it('dashboard link should not clickable when the current pathname is /', () => {
    cy.location()
      .should((loc) => {
        expect(loc.pathname).to.eq('/');
      });
    cy.get('[aria-label=Dashboard]')
      .should('have.class', 'active');
  });

  it('visit unknown url will redirect to /', () => {
    cy.visit('/iknowit');
    cy.location()
      .should((loc) => {
        expect(loc.pathname).to.eq('/');
      });
  });
});

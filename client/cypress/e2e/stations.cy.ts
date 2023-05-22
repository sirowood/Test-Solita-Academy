describe('Stations page', () => {
  beforeEach(() => {
    cy.visit('/stations');
  });

  describe('Control bar', () => {
    it('renders correctly', () => {
      cy.get('[title="Previous page"]')
        .should('exist')
        .and('have.attr', 'disabled');
      cy.get('[title="Next page"]')
        .should('exist');
      cy.get('[title="Change order direction"]')
        .should('exist');
      cy.get('[title="Set filters"]')
        .should('exist');
      cy.get('[title="Page size"]')
        .should('exist');
      cy.get('[title="Order by"]')
        .should('exist');
    });

    it('works correctly', () => {
      cy.get('[title="Page size"]')
        .should('have.value', '10')
        .select('20')
        .should('have.value', '20');

      cy.get('[title="Order by"]')
        .should('have.value', 'id')
        .select('nimi')
        .should('have.value', 'nimi');
    });
  });

  describe('Add new station modal', () => {
    beforeEach(() => {
      cy.get('[title="Add new button"]')
        .click();
    });

    it('renders correctly', () => {
      cy.contains('Add Station');
      cy.get('form')
        .find('input')
        .should('have.length', 11);
      cy.get('form')
        .find('button')
        .should('have.length', 3);
      cy.get('[role=presentation]')
        .click({ force: true });
      cy.contains('Add Station')
        .should('not.exist');
    });

    it('cancel button works correctly', () => {
      cy.contains('Add Station');
      cy.get('[aria-label="Cancel button"]')
        .click();
      cy.contains('Add Station')
        .should('not.exist');
    });

    it('reset button works correctly', () => {
      cy.get('[aria-label="Reset button"]')
        .should('have.attr', 'disabled');

      cy.get('[name=nimi]')
        .type('Nimi')
        .should('have.value', 'Nimi');

      cy.get('[aria-label="Reset button"]')
        .should('not.have.attr', 'disabled')

      cy.get('[aria-label="Reset button"]')
        .click();

      cy.get('[name=nimi]')
        .should('have.value', '');
    });

    it('submit button works correctly', () => {
      cy.request('POST', '/api/stations/reset');
      cy.get('[aria-label="Submit button"]')
        .should('have.attr', 'disabled');

      cy.get('[name=nimi]')
        .type('Nimi');

      cy.get('[name=namn]')
        .type('Namn');

      cy.get('[name=name]')
        .type('Name');

      cy.get('[name=osoite]')
        .type('Osoite');

      cy.get('[name=adress]')
        .type('Adress');

      cy.get('[name=kapasiteet]')
        .type('20');

      cy.get('[name=x]')
        .type('50');

      cy.get('[name=y]')
        .type('90');

      cy.get('[name=kaupunki]')
        .type('Kaupunki');

      cy.get('[name=stad]')
        .type('Stad');

      cy.get('[name=operaattor]')
        .type('Operaattor');

      cy.get('[aria-label="Submit button"]')
        .should('not.have.attr', 'disabled');

      cy.get('[aria-label="Submit button"]')
        .click();

      cy.contains('Success!');

      cy.get('[aria-label^="Station "]')
        .should('have.length', 1);

      cy.contains('Nimi');
    });
  });

  describe('Top bar', () => {
    it('renders correctly', () => {
      cy.contains('Stations');
      cy.get('[placeholder=Search]')
        .should('exist');
      cy.get('[title="Add new button"]')
        .should('exist');
    });

    it('search works correctly', () => {
      cy.get('[placeholder=Search]')
        .type('Hello');

      cy.get('[aria-label^="Station "]')
        .should('have.length', 0);


      cy.get('[placeholder=Search]')
        .clear()
        .type('Nimi');

      cy.get('[aria-label^="Station "]')
        .should('have.length', 1);
    });
  });

  describe('Filters modal', () => {
    it('renders correctly', () => {
      cy.get('[title="Set filters"]').
        click();
      cy.contains('Filters');
      cy.get('[data-testid="Modal body"]')
        .find('input')
        .should('have.length', 2);
      cy.get('[title="Reset filters button"]')
        .should('exist');
      cy.get('[role=presentation]')
        .click({ force: true });
      cy.contains('Filters')
        .should('not.exist');
    });

    it('reset button works correctly', () => {
      cy.get('[title="Set filters"]')
        .click();
      cy.get('[title="Filter Capacity from"]')
        .type('10');
      cy.get('[title="Filter Capacity from"]')
        .should('have.value', '10');
      cy.get('[title="Filter Capacity to"]')
        .type('20')
        .type('hello')
        .should('have.value', '20');
      cy.get('[title="Reset filters button"]')
        .click();
      cy.get('[title="Filter Capacity from"]')
        .should('have.value', '');
      cy.get('[title="Filter Capacity to"]')
        .should('have.value', '');
    });

    it('works correctly', () => {
      cy.get('[aria-label^="Station "]')
        .should('have.length', 1);

      cy.get('[title="Set filters"]').
        click();

      cy.get('[title="Filter Capacity from"]')
        .type('10');

      cy.get('[title="Filter Capacity to"]')
        .type('15');

      cy.get('[aria-label^="Station "]')
        .should('have.length', 0);
    });
  });

  describe('Single station', () => {
    it('renders correctly', () => {
      cy.contains('Nimi')
        .click();

      cy.location()
        .should((loc) => {
          expect(loc.pathname).to.match(/\d$/);
        });
      cy.contains('Departures');
      cy.contains('Arrivals');
    });
  });
});
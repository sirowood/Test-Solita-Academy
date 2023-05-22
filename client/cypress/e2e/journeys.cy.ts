describe('Journeys page', () => {
  beforeEach(() => {
    cy.visit('/journeys');
  });

  describe('Control bar', () => {
    it('renders correctly', () => {
      cy.get('[title="Previous page"]')
        .should('have.length', 1)
        .and('have.attr', 'disabled')
      cy.get('[title="Next page"]')
        .should('have.length', 1);
      cy.get('[title="Change order direction"]')
        .should('have.length', 1);
      cy.get('[title="Set filters"]')
        .should('have.length', 1);
      cy.get('[title="Page size"]')
        .should('have.length', 1);
      cy.get('[title="Order by"]')
        .should('have.length', 1);
    });

    it('works correctly', () => {
      cy.get('[title="Page size"]')
        .should('have.value', '10')
        .select('20')
        .should('have.value', '20');

      cy.get('[title="Order by"]')
        .should('have.value', 'id')
        .select('departureStationName')
        .should('have.value', 'departureStationName');
    });
  });

  describe('Add new journey modal', () => {
    beforeEach(() => {
      cy.get('[title="Add new button"]')
        .click();
    });

    it('renders correctly', () => {
      cy.contains('Add Journey');
      cy.get('[aria-label="station-menu"]')
        .should('have.length', 2);
      cy.get('form input')
        .should('have.length', 6);
      cy.get('form button')
        .should('have.length', 3);
      cy.get('[role=presentation]')
        .click({ force: true });
      cy.contains('Add Journey')
        .should('not.exist');
    });

    it('cancel button works correctly', () => {
      cy.contains('Add Journey');
      cy.get('[aria-label="Cancel button"]')
        .click();
      cy.contains('Add Journey')
        .should('not.exist');
    });

    it('reset button works correctly', () => {
      cy.get('[aria-label="Reset button"]')
        .should('have.attr', 'disabled');

      cy.get('[name=departureTime]')
        .type('2023-01-01 01:01:01')
        .should('have.value', '2023-01-01 01:01:01');

      cy.get('[aria-label="Reset button"]')
        .should('not.have.attr', 'disabled')

      cy.get('[aria-label="Reset button"]')
        .click();

      cy.get('[name=departureTime]')
        .should('have.value', '');
    });

    it('submit button works correctly', () => {
      cy.request('POST', '/api/journeys/reset');
      cy.request('POST', '/api/stations/reset');

      cy.request('POST', '/api/stations', {
        nimi: 'Station A',
        namn: 'Station A',
        name: 'Station A',
        osoite: 'Osoite',
        adress: 'Adress',
        kapasiteet: 10,
        x: '70.112221',
        y: '80.122222',
      });

      cy.get('[aria-label="station-menu"]')
        .eq(0)
        .focus()
        .type('Station A')
        .wait(500)
        .type('{enter}');

      cy.get('[aria-label="station-menu"]')
        .eq(1)
        .focus()
        .type('Station A')
        .wait(500)
        .type('{enter}');

      cy.get('[name=departureTime]')
        .type('2023-05-01 07:00:00');

      cy.get('[name=arrivalTime]')
        .type('2023-05-01 07:10:00');

      cy.get('[name=coveredDistance]')
        .type('2000');

      cy.get('[name=duration]')
        .type('600');
      cy.get('[aria-label="Submit button"]')
        .click();
      cy.contains('Success!');

      cy.contains('Station A');
      cy.contains('2.000');

    });
  });

  describe('Top bar', () => {
    it('renders correctly', () => {
      cy.contains('Journeys');
      cy.get('[placeholder="Search"]')
        .should('have.length', 1);
      cy.get('[title="Add new button"]')
        .should('have.length', 1);
    });

    it('search works correctly', () => {
      cy.get('[placeholder=Search]')
        .type('Hello');

      cy.contains('Station A')
        .should('not.exist');


      cy.get('[placeholder=Search]')
        .clear()
        .type('Sta');

      cy.contains('Station A');
    });
  });

  describe('Filters modal', () => {
    it('renders correctly', () => {
      cy.get('[title="Set filters"]')
        .click();
      cy.contains('Filters');
      cy.get('[data-testid="Modal body"]')
        .find('input')
        .should('have.length', 8);
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
      cy.get('[title="Filter Departure Time from"]')
        .type('2023-05-01')
        .should('have.value', '2023-05-01');
      cy.get('[title="Reset filters button"]')
        .click();
      cy.get('[title="Filter Departure Time from"]')
        .should('have.value', '');
    });

    it('works correctly', () => {
      cy.contains('Station A');

      cy.get('[title="Set filters"]')
        .click();
      cy.get('[title="Filter Departure Time from"]')
        .type('2023-06-01');

      cy.contains('Station A')
        .should('not.exist');
    });
  });
});
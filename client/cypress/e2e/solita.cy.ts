describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('');
  });

  it('click the stations link will visit to /stations', () => {
    cy.get('[aria-label=Stations').click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/stations');
    });
  });

  it('click the journeys link will visit to /journeys', () => {
    cy.get('[aria-label=Journeys').click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/journeys');
    });
  });

  it('click the dashboard link will visit to /', () => {
    cy.get('[aria-label=Dashboard]').click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/');
    });
  });

  it('dashboard link should not clickable when the current pathname is /', () => {
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/');
    });
    cy.get('[aria-label=Dashboard]').should('have.class', 'active');
  });

  it('visit unknown url will redirect to /', () => {
    cy.visit('/iknowit');
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/');
    });
  });
});

describe('Home page', () => {
  it('renders correctly', () => {
    cy.visit('/');
    cy.contains('Hello Solita');
  });
});

describe('Stations page', () => {
  beforeEach(() => {
    cy.visit('/stations');
  });

  describe('Top bar', () => {
    it('renders correctly', () => {
      cy.contains('Stations');
      cy.get('input').get('[placeholder="Search"]');
      cy.get('button').get('[title="Add new button"]');
    });
  });

  describe('Control bar', () => {
    it('renders correctly', () => {
      cy.get('button').get('[title="Previous page"]');
      cy.get('button').get('[title="Next page"]');
      cy.get('button').get('[title="Change order direction"]');
      cy.get('button').get('[title="Set filters"]');
      cy.get('[title="Previous page"]').should('have.attr', 'disabled');
      cy.get('select').get('[title="Page size"]');
      cy.get('select').get('[title="Order by"]');
    });

    it('works correctly', () => {
      cy.get('select').get('[title="Page size"]')
        .should('have.value', '10')
        .select('20')
        .should('have.value', '20');

      cy.get('select').get('[title="Order by"]')
        .should('have.value', 'id')
        .select('nimi')
        .should('have.value', 'nimi');
    });
  });

  describe('Filters modal', () => {
    it('renders correctly', () => {
      cy.get('[title="Set filters"]').click();
      cy.contains('Filters');
      cy.get('input').eq(2);
      cy.get('button').get('[title="Reset filters button"]');
      cy.get('[role=presentation]').click({ force: true });
      cy.contains('Filters').should('not.exist');
    });

    it('works correctly', () => {
      cy.get('[title="Set filters"]').click();
      cy.get('input').get('[title="Filter Capacity from"]').type('10');
      cy.get('input').get('[title="Filter Capacity from"]').should('have.value', '10');
      cy.get('input').get('[title="Filter Capacity to"]').type('20');
      cy.get('input').get('[title="Filter Capacity to"]').type('hello');
      cy.get('input').get('[title="Filter Capacity to"]').should('have.value', '20');
      cy.get('[title="Reset filters button"]').click();
      cy.get('input').get('[title="Filter Capacity from"]').should('have.value', '');
      cy.get('input').get('[title="Filter Capacity to"]').should('have.value', '');
    });
  });

  describe('Add new station modal', () => {
    beforeEach(() => {
      cy.get('button').get('[title="Add new button"]').click();
    });

    it('renders correctly', () => {
      cy.contains('Add Station');
      cy.get('form').get('input').eq(11);
      cy.get('form').get('button').eq(3);
      cy.get('[role=presentation]').click({ force: true });
    });

    it('cancel button works correctly', () => {
      cy.contains('Add Station');
      cy.get('[aria-label="Cancel button"]').click();
      cy.contains('Add Station').should('not.exist');
    });

    it('reset button works correctly', () => {
      cy.get('[name=nimi]')
        .type('Nimi')
        .should('have.value', 'Nimi');

      cy.get('[aria-label="Reset button"]')
        .click()
        .should('have.value', '');

      cy.get('[role=presentation]')
        .click({ force: true });
    });

    it('submit button works correctly', () => {

      cy.get('input')
        .get('[name=nimi]')
        .should('have.value', '')
        .type('Nimi');

      cy.get('input')
        .get('[name=namn]')
        .should('have.value', '')
        .type('Namn');

      cy.get('input').get('[name=name]')
        .should('have.value', '')
        .type('Name');

      cy.get('input').get('[name=osoite]')
        .should('have.value', '')
        .type('Osoite');

      cy.get('input').get('[name=adress]')
        .should('have.value', '')
        .type('Adress');

      cy.get('input').get('[name=kapasiteet]')
        .should('have.value', '')
        .type('20');

      cy.get('input').get('[name=x]')
        .should('have.value', '')
        .type('50');

      cy.get('input').get('[name=y]')
        .should('have.value', '')
        .type('90');

      cy.get('input').get('[name=kaupunki]')
        .should('have.value', '')
        .type('Kaupunki');

      cy.get('input').get('[name=stad]')
        .should('have.value', '')
        .type('Stad');

      cy.get('input').get('[name=operaattor]')
        .should('have.value', '')
        .type('Operaattor');
    });
  });
});

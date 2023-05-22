describe('Single station', () => {
  beforeEach(() => {
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

    cy.request('POST', '/api/journeys', {
      departureStationId: 1,
      arrivalStationId: 1,
      departureTime: '2023-05-01 07:00:00',
      arrivalTime: '2023-05-01 07:10:00',
      coveredDistance: 2000,
      duration: 600,
    });

    cy.visit('/stations/1');
  })
  it('renders correctly', () => {
    cy.contains('2000');
  });

  it('month filter works correctly', () => {
    cy.get('[title="Month filter"]')
      .type('2023-01')
      .wait(1000);

    cy.contains('2000')
      .should('not.exist');
  });
});
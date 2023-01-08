import Station from './station.model';
import Journey from './journey.model';

Station.hasMany(Journey, { foreignKey: 'departureStationId', as: 'departureJourneys' });
Station.hasMany(Journey, { foreignKey: 'arrivalStationId', as: 'arrivalJourneys' });

Journey.belongsTo(Station, { foreignKey: 'departureStationId', as: 'departureStation'});
Journey.belongsTo(Station, { foreignKey: 'arrivalStationId', as: 'arrivalStation'});

export {
  Station,
  Journey,
};
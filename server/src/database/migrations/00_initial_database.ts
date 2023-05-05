import { DataTypes } from 'sequelize';
import { Migration } from '../';
import initializeData from '../initial';
import { info } from '../../utils/logger';

const { INTEGER, TEXT, FLOAT, DATE, NOW } = DataTypes;

const up: Migration = async function ({ context: queryInterface }) {
  info('Initializing database...');
  info('Create stations table.');
  await queryInterface.createTable('stations', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nimi: {
      type: TEXT,
      allowNull: false,
    },
    namn: {
      type: TEXT,
      allowNull: false,
    },
    name: {
      type: TEXT,
      allowNull: false,
    },
    osoite: {
      type: TEXT,
      allowNull: false,
    },
    adress: {
      type: TEXT,
      allowNull: false,
    },
    kaupunki: {
      type: TEXT,
    },
    stad: {
      type: TEXT,
    },
    operaattor: {
      type: TEXT,
    },
    kapasiteet: {
      type: INTEGER,
      allowNull: false,
    },
    x: {
      type: FLOAT,
      allowNull: false,
    },
    y: {
      type: FLOAT,
      allowNull: false,
    },
    created_at: {
      type: DATE,
      allowNull: false,
    },
    updated_at: {
      type: DATE,
      allowNull: false,
    },
  });

  info('Create journeys table.');
  await queryInterface.createTable('journeys', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    departure_time: {
      type: DATE,
      allowNull: false,
    },
    arrival_time: {
      type: DATE,
      allowNull: false,
    },
    departure_station_id: {
      type: INTEGER,
      allowNull: false,
      references: { model: 'stations', key: 'id' },
    },
    arrival_station_id: {
      type: INTEGER,
      allowNull: false,
      references: { model: 'stations', key: 'id' },
    },
    covered_distance: {
      type: FLOAT,
      allowNull: false,
    },
    duration: {
      type: INTEGER,
      allowNull: false,
    },
    created_at: {
      type: DATE,
      allowNull: false,
      defaultValue: NOW,
    },
    updated_at: {
      type: DATE,
      allowNull: false,
      defaultValue: NOW,
    },
  });

  info('Add index to journeys for possible better query performance');
  await queryInterface.addIndex(
    'journeys',
    ['departure_station_id', 'arrival_station_id'],
    { name: 'departure_arrival_stations' }
  );
  await queryInterface.addIndex(
    'journeys',
    ['departure_station_id'],
    { name: 'departure_stations' }
  );
  await queryInterface.addIndex(
    'journeys',
    ['arrival_station_id'],
    { name: 'arrival_stations' }
  );

  info('Add composite unique constraint to journeys');
  await queryInterface.addConstraint(
    'journeys',
    {
      name: 'unique_journey_constraint',
      type: 'unique',
      fields: ['departure_time', 'arrival_time', 'departure_station_id', 'arrival_station_id', 'covered_distance', 'duration']
    },
  );

  if (process.env.NODE_ENV !== 'test') {
    info('Initial data from csv files');
    await initializeData();
  }
};

const down: Migration = async function ({ context: queryInterface }) {
  info('Drop all tables');
  await queryInterface.dropAllTables();
};

export { up, down };
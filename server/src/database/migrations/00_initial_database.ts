import { DataTypes } from "sequelize";
import type { Migration } from "../";
import { info } from '../../utils/logger';

const { INTEGER, TEXT, FLOAT, DATE } = DataTypes;

const up: Migration = async ({ context: queryInterface }) => {
  info('Initializing database...');
  info('Create stations table.');
  await queryInterface.createTable('stations', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fid: {
      type: INTEGER,
      allowNull: false,
      unique: true,
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
    departure: {
      type: DATE,
      allowNull: false,
    },
    return: {
      type: DATE,
      allowNull: false,
    },
    departure_station_id: {
      type: INTEGER,
      allowNull: false,
      references: { model: 'stations', key: 'id' },
    },
    departure_station_name: {
      type:TEXT,
      allowNull: false,
    },
    return_station_id: {
      type: INTEGER,
      allowNull: false,
      references: { model: 'stations', key: 'id' },
    },
    return_station_name: {
      type:TEXT,
      allowNull: false,
    },
    covered_distance: {
      type:FLOAT,
      allowNull: false,
    },
    duration: {
      type: INTEGER,
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
  info('Database initialization done.');
};

const down: Migration = async ({ context: queryInterface }) => {
  info('Drop all tables');
  await queryInterface.dropAllTables();
  info('Done');
};

export { up, down };
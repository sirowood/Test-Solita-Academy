import {
  Model,
  ForeignKey,
  DataTypes,
} from 'sequelize';
import { sequelize } from '..';
import Station from './station.model';

class Journey extends Model {
  public id!: number;
  public departureTime!: Date;
  public arrivalTime!: Date;
  public departureStationId!: ForeignKey<Station['id']>;
  public arrivalStationId!: ForeignKey<Station['id']>;
  public coveredDistance!: number;
  public duration!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public departureStationName?: string;
  public arrivalStationName?: string;
}

Journey.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  departureTime: {
    type: DataTypes.DATE,
    allowNull: false,
    unique: 'unique_journey_constraint'
  },
  arrivalTime: {
    type: DataTypes.DATE,
    allowNull: false,
    unique: 'unique_journey_constraint'
  },
  coveredDistance: {
    type: DataTypes.FLOAT,
    allowNull: false,
    unique: 'unique_journey_constraint'
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: 'unique_journey_constraint'
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
}, {
  sequelize,
  underscored: true,
  tableName: 'journeys',
  modelName: 'journeys',
  defaultScope: {
    attributes: {
      exclude: ['createdAt', 'updatedAt'],
    },
    raw: true,
  },
  
});
export default Journey;
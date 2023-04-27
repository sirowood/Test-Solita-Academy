import {
  Model,
  DataTypes,
  QueryTypes,
} from 'sequelize';
import { sequelize } from '..';

class Station extends Model {
  static async getStationTableMaxSequence() {
    const result: { max: number }[] = await sequelize.query('SELECT MAX(id) FROM stations;', { type: QueryTypes.SELECT });
    return result[0].max || 0;
  }
  static async updateStationTableSequence() {
    const maxId = await this.getStationTableMaxSequence();
    await sequelize.query(
      `SELECT setval(
        PG_GET_SERIAL_SEQUENCE('stations', 'id'),
        $maxId
      );`,
      {
        bind: { maxId },
        type: QueryTypes.SELECT,
      },
    );
  }
  public id!: number;
  public nimi!: string;
  public namn!: string;
  public name!: string;
  public osoite!: string;
  public adress!: string;
  public kaupunki!: string | undefined;
  public stad!: string | undefined;
  public operaattor!: string | undefined;
  public kapasiteet!: number;
  public x!: number;
  public y!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public readonly avgDepartureDistance?: number;
  public readonly avgArrivalDistance?: number;
}

Station.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nimi: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  namn: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  osoite: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  adress: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  kaupunki: {
    type: DataTypes.TEXT,
  },
  stad: {
    type: DataTypes.TEXT,
  },
  operaattor: {
    type: DataTypes.TEXT,
  },
  kapasiteet: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  x: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  y: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
}, {
  sequelize,
  underscored: true,
  tableName: 'stations',
  modelName: 'stations',
  defaultScope: {
    attributes: {
      exclude: ['createdAt', 'updatedAt'],
    },
    raw: true,
  },
});

export default Station;
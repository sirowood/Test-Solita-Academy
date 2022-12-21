import {
  DataType,
  ForeignKey,
  Column,
  Table,
  Model,
} from "sequelize-typescript";
import Station from "./station";

const { INTEGER, TEXT, DATE, FLOAT } = DataType;

@Table({
  underscored: true,
  modelName: 'journey',
})
class Journey extends Model {
  @Column({
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @Column({
    type: DATE,
    allowNull: false,
  })
  departure!: Date;

  @Column({
    type: DATE,
    allowNull: false,
  })
  return!: Date;

  @ForeignKey(() => Station)
  @Column({
    type: INTEGER,
    allowNull: false,
  })
  departureStationId!: number;

  @Column({
    type:TEXT,
    allowNull: false,
  })
  departureStationName!: string;

  @ForeignKey(() => Station)
  @Column({
    type:INTEGER,
    allowNull: false,
  })
  returnStationId!: number;

  @Column({
    type:TEXT,
    allowNull: false,
  })
  returnStationName!: string;

  @Column({
    type:FLOAT,
    allowNull: false,
  })
  coveredDistance!: number;

  @Column({
    type: INTEGER,
    allowNull: false,
  })
  duration!: number;
}

export default Journey;
import {
  DataType,
  Column,
  Table,
  Model,
} from "sequelize-typescript";

const { INTEGER, TEXT, FLOAT } = DataType;

@Table({
  underscored: true,
  tableName: 'stations',
})
class Station extends Model {
  @Column({
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @Column({
    type: INTEGER,
    allowNull: false,
    unique: true,
  })
  fid!: number;

  @Column({
    type: TEXT,
    allowNull: false,
  })
  nimi!: string;

  @Column({
    type: TEXT,
    allowNull: false,
  })
  namn!: string;

  @Column({
    type: TEXT,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: TEXT,
    allowNull: false,
  })
  osoite!: string;

  @Column({
    type: TEXT,
    allowNull: false,
  })
  adress!: string;

  @Column(TEXT)
  kaupunki!: string;

  @Column(TEXT)
  stad!: string;

  @Column(TEXT)
  operaattor!: string;

  @Column({
    type: INTEGER,
    allowNull: false,
  })
  kapasiteet!: number;

  @Column({
    type: FLOAT,
    allowNull: false,
  })
  x!: number;

  @Column({
    type: FLOAT,
    allowNull: false,
  })
  y!: number;
}

export default Station;
import { Sequelize } from 'sequelize-typescript';
import { Umzug, SequelizeStorage } from 'umzug';
import { info, error } from '../utils/logger';
import { DATABASE_URL } from "../utils/config";

const DB = new Sequelize(DATABASE_URL, {
  dialect: 'postgres',
  logging: false,
  models: [__dirname + '/models'],
});

const migrationConfig = {
  migrations: {
    glob: 'src/database/migrations/*.ts',
  },
  storage: new SequelizeStorage({ sequelize: DB, tableName: 'migrations' }),
  context: DB.getQueryInterface(),
  logger: console,
};

const migrator = new Umzug(migrationConfig);

type Migration = typeof migrator._types.migration;

const runMigrations = async () => {
  try {
    await migrator.up();
    info('Migrations up to date.');
  } catch(e: unknown) {
    if (e instanceof Error) {
      error(`Migration up failed: ${e.message}`);
    }
  }
};

const rollbackMigrations = async () => {
  info('Establishing database connection...');
  try {
    await DB.authenticate();
    info('Database connection established.');
    await migrator.down();
    await DB.close();
  } catch (e: unknown) {
    if (e instanceof Error) {
      error(`Migration down failed: ${e.message}`);
    }
  }
};

const connectToDatabase = async () => {
  info('Establishing database connection...');
  try {
    await DB.authenticate();
    info('Database connection established.');
    await runMigrations();
  } catch (e: unknown) {
    if (e instanceof Error) {
      error(`Database connection faild: ${e.message}`);
    }
  }

  return null;
};

export {
  type Migration,
  DB,
  connectToDatabase,
  rollbackMigrations,
};
import { Sequelize } from "sequelize";
import { Umzug, SequelizeStorage } from 'umzug';
import { info, error } from '../utils/logger';
import { DATABASE_URL } from '../utils/config';

const sequelize = new Sequelize(DATABASE_URL, {
  dialect: 'postgres',
  logging: false,
  dialectOptions: {
    ssl: process.env.NODE_ENV === 'production' ? true : false,
  },
});

const migrationConfig = {
  migrations: {
    glob: process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'e2e'
      ? 'build/database/migrations/*.js'
      : 'src/database/migrations/*.ts',
  },
  storage: new SequelizeStorage({ sequelize, tableName: 'migrations' }),
  context: sequelize.getQueryInterface(),
  logger: process.env.NODE_ENV !== 'test' ? console : undefined,
};

const migrator = new Umzug(migrationConfig);

export type Migration = typeof migrator._types.migration;


async function runMigrations() {
  try {
    await migrator.up();
    info('Migrations up to date.');
  } catch (e: unknown) {
    if (e instanceof Error) {
      error(`Migration up failed: ${e.message}`);
    }
  }
}

async function rollbackMigrations() {
  info('Establishing database connection...');
  try {
    await sequelize.authenticate();
    info('Database connection established.');
    await migrator.down();
    await sequelize.close();
  } catch (e: unknown) {
    if (e instanceof Error) {
      error(`Migration down failed: ${e.message}`);
    }
  }
}

async function connectToDatabase() {
  info('Establishing database connection...');
  try {
    await sequelize.authenticate();
    info('Database connection established.');
    await runMigrations();
  } catch (e: unknown) {
    if (e instanceof Error) {
      error(`Database connection faild: ${e.message}`);
      throw new Error(e.message);
    }
  }
}

export {
  sequelize,
  connectToDatabase,
  rollbackMigrations,
};
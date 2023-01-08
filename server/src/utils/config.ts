import 'dotenv/config';

const PORT = process.env.PORT || 3001;

const DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'postgres://postgres:password@localhost:3003/test'
  : process.env.DATABASE_URL || 'postgres://xuefeng:password@database:5432/solita';

export {
  PORT,
  DATABASE_URL,
};
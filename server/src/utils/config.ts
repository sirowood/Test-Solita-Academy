import 'dotenv/config';

const PORT = process.env.PORT || 3001;
let DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'postgres://postgres:password@localhost:3003/test'
  : process.env.DATABASE_URL || 'postgres://xuefeng:password@database:5432/solita';

if (process.env.PLATFORM === 'github') {
  DATABASE_URL = 'postgres://postgres:password@database-test:5432/test';
}

export {
  PORT,
  DATABASE_URL,
};
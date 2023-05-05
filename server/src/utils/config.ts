import 'dotenv/config';

const PORT = process.env.PORT || 3001;

let DATABASE_URL = '';

switch (process.env.NODE_ENV) {
  case 'test':
    DATABASE_URL = 'postgres://postgres:password@localhost:3003/test';
    break;
  case 'development':
    DATABASE_URL = 'postgres://xuefeng:password@database:5432/solita';
    break;
  case 'production':
    DATABASE_URL = process.env.DATABASE_URL || '';
    break;
}

export {
  PORT,
  DATABASE_URL,
};
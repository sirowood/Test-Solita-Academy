import app from './app';
import { connectToDatabase } from './database';
import { info } from './utils/logger';
import { PORT } from './utils/config';

async function start() {
  await connectToDatabase();
  app.listen(PORT, () => {
    info(`Server running on port ${PORT}`);
  });
}

void start();
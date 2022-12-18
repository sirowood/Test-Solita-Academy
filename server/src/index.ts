import app from './app';
import { info } from './utils/logger';
import { PORT } from './utils/config';

app.listen(PORT, () => {
  info(`Server running on port ${PORT}`);
});
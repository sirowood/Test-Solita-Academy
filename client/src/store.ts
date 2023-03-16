import { configureStore } from '@reduxjs/toolkit';
import showNav from './reducers/navigation';

const store = configureStore({
  reducer: {
    showNav,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;

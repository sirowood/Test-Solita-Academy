import { configureStore } from '@reduxjs/toolkit';
import showNav from './reducers/navigation';
import showModal from './reducers/modal';

const store = configureStore({
  reducer: {
    showNav,
    showModal,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;

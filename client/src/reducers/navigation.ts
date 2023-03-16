import { createSlice } from '@reduxjs/toolkit';

const navigationBarSlice = createSlice({
  name: 'navigationBar',
  initialState: true,
  reducers: {
    toggleNavigationBar(state) {
      return !state;
    },
  },
});

export const { toggleNavigationBar } = navigationBarSlice.actions;

export default navigationBarSlice.reducer;

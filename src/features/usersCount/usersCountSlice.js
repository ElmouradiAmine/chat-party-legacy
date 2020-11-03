/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const usersCountSlice = createSlice({
  initialState,
  name: 'usersCount',
  reducers: {
    getCount: (state, action) => {
      state.value = action.payload.value;
    },
  },
});

export const userCountSelector = (state) => state.usersCount.value;
export const { getCount } = usersCountSlice.actions;
export default usersCountSlice.reducer;

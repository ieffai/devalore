import {createSlice} from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    successCounter: false,
  },
  reducers: {
    isCounted(state, action) {
      state.successCounter = action.payload;
    },
  },
});

export default appSlice.reducer;
export const {isCounted} = appSlice.actions;

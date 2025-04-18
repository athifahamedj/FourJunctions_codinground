import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('actors')) || [];

const actorSlice = createSlice({
  name: 'actors',
  initialState,
  reducers: {
    addActor: (state, action) => {
      state.push(action.payload);
      localStorage.setItem('actors', JSON.stringify(state));
    },
  },
});

export const { addActor } = actorSlice.actions;
export default actorSlice.reducer;

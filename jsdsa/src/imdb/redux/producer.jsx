import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('producers')) || [];

const producerSlice = createSlice({
  name: 'producers',
  initialState,
  reducers: {
    addProducer: (state, action) => {
      state.push(action.payload);
      localStorage.setItem('producers', JSON.stringify(state));
    },
  },
});

export const { addProducer } = producerSlice.actions;
export default producerSlice.reducer;
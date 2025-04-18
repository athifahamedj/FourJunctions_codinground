import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('movies')) || [];
// console.log(initialState)
const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.push(action.payload);
      localStorage.setItem('movies', JSON.stringify(state));
    },
    updateMovie: (state, action) => {
      const index = state.findIndex(movie => movie.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
        localStorage.setItem('movies', JSON.stringify(state));
      }
    },
  },
});

export const { addMovie, updateMovie } = movieSlice.actions;
export default movieSlice.reducer;
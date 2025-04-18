import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './movie';
import actorReducer from './actor';
import producerReducer from './producer';

const store = configureStore({
  reducer: {
    movies: movieReducer,
    actors: actorReducer,
    producers: producerReducer,
  },
});

export default store;

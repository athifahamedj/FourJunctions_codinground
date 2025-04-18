import React from 'react';
import { useSelector } from 'react-redux';

const MovieList = () => {
  const movies = useSelector((state) => state.movies);
  const actors = useSelector((state) => state.actors);
  const producers = useSelector((state) => state.producers);

  const getActorNames = (ids) => {
    return ids
      .map((id) => actors.find((actor) => actor.id === id))
      .filter(Boolean)
      .map((actor) => actor.name)
      .join(', ');
  };

  const getProducerName = (id) => {
    const producer = producers.find((prod) => prod.id === id);
    return producer ? producer.name : 'N/A';
  };

  return (
    <div>
      <h2>Movie List</h2>
      {movies.length === 0 ? (
        <p>No movies added yet.</p>
      ) : (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id} style={{ marginBottom: '1.5rem' }}>
              <h3>{movie.name} ({movie.year})</h3>
              <img src={movie.poster} alt={movie.name} style={{ width: '150px', height: 'auto' }} />
              <p><strong>Plot:</strong> {movie.plot}</p>
              <p><strong>Producer:</strong> {getProducerName(movie.producerId)}</p>
              <p><strong>Actors:</strong> {getActorNames(movie.actorIds)}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieList;

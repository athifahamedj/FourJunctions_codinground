import MovieForm from './MovieForm';
import MovieList from './MovieList';

const IMDbClonePage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Add Movies Here!</h2>
      <MovieForm />
      <MovieList />
    </div>
  );
};

export default IMDbClonePage;

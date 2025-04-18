import { Link, Outlet } from 'react-router-dom';

const IMDbLayout = () => {
  return (
    <div>
      <h2> IMDb Clone</h2>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/imdb-clone" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/imdb-clone/movies" style={{ marginRight: '10px' }}>Movie List</Link>
        <Link to="/imdb-clone/add-actor" style={{ marginRight: '10px' }}>Add Actor</Link>
        <Link to="/imdb-clone/add-producer" style={{ marginRight: '10px' }}>Add Producer</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default IMDbLayout;

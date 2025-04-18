import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MaxProfitCalculator from './projects/max_profit_problem';
import WaterTankProblem from './projects/water_tank_problem';
import IMDbClonePage from './imdb/components/IMDbClonePage';
import MovieList from './imdb/components/MovieList';
import ActorForm from './imdb/components/ActorForm';
import ProducerForm from './imdb/components/ProducerForm';
import IMDbLayout from './imdb/IMDbLayout';

function App() {
  return (
    <Router>
      <div className="App">
        <h2>React DSA Coding Interview - 4 Junctions</h2>

        <nav style={{ marginBottom: '20px' }}>
          <Link to="/max-profit" style={{ marginRight: '10px' }}>Max Profit</Link>
          <Link to="/water-tank" style={{ marginRight: '10px' }}>Water Tank</Link>
          {/* <Link to="/imdb-clone">IMDb Clone</Link> */}
        </nav>

        <Routes>
          <Route path="/max-profit" element={<MaxProfitCalculator />} />
          <Route path="/water-tank" element={<WaterTankProblem />} />

           
          <Route path="/imdb-clone" element={<IMDbLayout />}>
            <Route index element={<IMDbClonePage />} />
            <Route path="movies" element={<MovieList />} />
            <Route path="add-actor" element={<ActorForm />} />
            <Route path="add-producer" element={<ProducerForm />} />
          </Route>

          <Route path="/" element={<p>Select a problem to begin!</p>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

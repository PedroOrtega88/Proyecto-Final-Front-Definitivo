import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MovieList from './components2/MovieList.jsx';
import MovieDetails from './components2/MovieDetails.jsx';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/peliculas');
      const peliculasData = await response.json();
      setMovies(peliculasData);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MovieList movies={movies} />} />
        <Route path="/movie/:index" element={<MovieDetails movies={movies} />} />
      </Routes>
    </Router>
  );
};

export default App;

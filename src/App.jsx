import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components2/Header.jsx';
import PeliculasRutas from './rutas/PeliculasRutas.jsx'; 
import './App.css'
const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://proyecto-final-production-4c19.up.railway.app/peliculas');
      const peliculasData = await response.json();
      setMovies(peliculasData);
      setLoading(false);
      
      const allCategories = peliculasData.reduce((acc, movie) => {
        movie.category.split(', ').forEach(category => {
          if (!acc.includes(category)) {
            acc.push(category);
          }
        });
        return acc;
      }, []);
      setCategories(allCategories);
    
      setFilteredMovies(peliculasData);
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
      <Header categories={categories} movies={movies} setFilteredMovies={setFilteredMovies} />
      
      <PeliculasRutas movies={movies} filteredMovies={filteredMovies} />
    </Router>
  );
};

export default App;

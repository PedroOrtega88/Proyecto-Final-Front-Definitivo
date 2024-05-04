import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MovieList from './components2/MovieList.jsx';
import MovieDetails from './components2/MovieDetails.jsx';
import Header from './components2/Header.jsx';
import CommentsPage from './components2/CommentsPage.jsx'
import './App.css';

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
      // Extraer categorías de las películas y almacenarlas en un array separado
      const allCategories = peliculasData.reduce((acc, movie) => {
        movie.category.split(', ').forEach(category => {
          if (!acc.includes(category)) {
            acc.push(category);
          }
        });
        return acc;
      }, []);
      setCategories(allCategories);
      // Inicialmente, mostrar todas las películas
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
      <Routes>
        <Route exact path="/" element={<MovieList movies={filteredMovies} />} />
        <Route path="/movie/:index" element={<MovieDetails movies={movies} />} />
        
        <Route path="/category/:category" element={<CategoryMovies movies={movies} />} />
       
        <Route path="/comments/:index" element={<CommentsPage movies={movies} />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </Router>
  );
};

const CategoryMovies = ({ movies, params }) => {
  const category = params.category;
  const categoryMovies = movies.filter(movie => movie.category.includes(category));

  return <MovieList movies={categoryMovies} />;
};

const NotFound = () => {
  return <div>404 - Página no encontrada</div>;
};

export default App;

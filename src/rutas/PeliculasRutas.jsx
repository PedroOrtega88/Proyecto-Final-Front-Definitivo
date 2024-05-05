import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import MovieList from '../components2/MovieList.jsx';
import MovieDetails from '../components2/MovieDetails.jsx';
import CommentsPage from '../components2/CommentsPage.jsx';
import Login from '../components2/Login.jsx';
import Register from '../components2/Register.jsx';

const PeliculasRutas = ({ movies, filteredMovies }) => {
  return (
    <Routes>
      <Route exact path="/" element={<MovieList movies={filteredMovies} />} />
      <Route path="/movie/:index" element={<MovieDetails movies={movies} />} />
      <Route path="/comments/:index" element={<CommentsPage movies={movies} />} />
      <Route path="/login" element={<Login />} /> 
      <Route path="/register" element={<Register />} /> 
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
};

export default PeliculasRutas;

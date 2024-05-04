import './MovieDetails.css';
import React from 'react';
import { useParams } from 'react-router-dom';


const MovieDetails = ({ movies }) => {
  const { index } = useParams();
  const movie = movies[index];

  return (
    <div>
      <h1>{movie.name}</h1>
      <img src={movie.imageUrl} alt={movie.name} className="movie-image" />
      {}
      <p>Categoría: {movie.category}</p>
      <p>Descripción: {movie.description}</p>
      <p>Puntuación: {movie.imdbRating}</p>
      <p>Año de lanzamiento: {movie.releaseYear}</p>
      <p>Plataforma: {movie.platform}</p>
      <p>Actores: {movie.actors.join(", ")}</p>
      <p>Director: {movie.director}</p>
      <iframe title="trailer" width="560" height="315" src={movie.trailerUrl} frameBorder="0" allowFullScreen></iframe>
    </div>
  );
};

export default MovieDetails;
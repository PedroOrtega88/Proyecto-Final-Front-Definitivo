// MovieList.jsx

import './MovieList.css';
import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list"> 
      <h1>WIS</h1>
      <ul>
        {movies.map((pelicula, index) => (
          <li key={index}>
            <Link to={`/movie/${index}`}>
              <img className="movie-image" src={pelicula.imageUrl} alt={pelicula.name} />
            </Link>
            <div>
              <Link to={`/comments/${index}`}>Comentarios</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;

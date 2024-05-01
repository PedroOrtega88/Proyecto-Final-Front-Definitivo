import React from 'react';

function MovieDetail({ movie }) {
  return (
    <div>
      <h2>{movie.name}</h2>
      <p>Description: {movie.description}</p>
      <p>Category: {movie.category}</p>
      {/* Add more movie details here */}
    </div>
  );
}

export default MovieDetail;

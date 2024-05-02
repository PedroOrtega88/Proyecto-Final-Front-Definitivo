import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/peliculas');
      const peliculasData = await response.json();
      setData(peliculasData);
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
    <div className="card-container">
      {data.map((pelicula, index) => (
        <div key={index} className="card">
          <img src={pelicula.imageUrl} alt={pelicula.name} className="card-img" />
          <div className="card-content">
            <h2 className="card-title">{pelicula.name}</h2>
            <p><strong>Categoría:</strong> {pelicula.category}</p>
            <p><strong>Descripción:</strong> {pelicula.description}</p>
            <p><strong>Director:</strong> {pelicula.director}</p>
            <p><strong>Actores:</strong> {pelicula.actors.join(', ')}</p>
            <p><strong>Plataforma:</strong> {pelicula.platform}</p>
            <a href={pelicula.trailerUrl} target="_blank" rel="noopener noreferrer">Ver tráiler</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;

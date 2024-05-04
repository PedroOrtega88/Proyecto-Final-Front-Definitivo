import './Header.css';
import React, { useState } from 'react';


const Header = ({ categories, movies, setFilteredMovies }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    
    const filteredMovies = category
      ? movies.filter(movie => movie.category.includes(category))
      : movies;
    setFilteredMovies(filteredMovies);
  };

  return (
    <header>
      <h1>WhatISee</h1>
  
      <select onChange={handleCategoryChange} value={selectedCategory}>
        <option value="">Todas las categorías</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>{category}</option>
        ))}
      </select>
    </header>
  );
};

export default Header;

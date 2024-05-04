
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';


const CommentsPage = ({ movies }) => {
  const { index } = useParams();
  const movie = movies[index];
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState('');
  const [comments, setComments] = useState([]);
  const [averageRating, setAverageRating] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    setComments([...comments, { comment, rating }]);
    
    const newAverageRating = calculateAverageRating([...comments, { comment, rating }]);
    setAverageRating(newAverageRating);
    
    setComment('');
    setRating('');
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  
  const calculateAverageRating = (comments) => {
    if (comments.length === 0) return 0;
    const totalRating = comments.reduce((acc, curr) => acc + parseInt(curr.rating), 0);
    return totalRating / comments.length;
  };

  return (
    <div>
      <h1>{movie.name} - Comentarios y Puntuaciones</h1>
      <p>Puntuación media: {averageRating.toFixed(1)}</p>

   
      <form onSubmit={handleSubmit} className="comment-form">
        <label htmlFor="comment">Añadir comentario:</label><br />
        <textarea id="comment" value={comment} onChange={handleCommentChange} /><br />
        <label htmlFor="rating">Puntuación (1-10):</label><br />
        <input type="number" id="rating" min="1" max="10" value={rating} onChange={handleRatingChange} /><br />
        <button type="submit">Enviar comentario</button>
      </form>

   
      <div className="comments">
        <h2>Comentarios:</h2>
        {comments.map((item, index) => (
          <div key={index}>
            <p>{item.comment}</p>
            <p>Puntuación: {item.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentsPage;


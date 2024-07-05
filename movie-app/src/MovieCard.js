import React from 'react';
import './MovieCard.css';
import { FaStar } from 'react-icons/fa';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img className="movie-img" src={movie.posterURL} alt={movie.title} />
      <div className="movie-details">
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
        <div className="rating">
          {[...Array(5)].map((star, index) => (
            <FaStar
              key={index}
              color={index < movie.rating ? 'gold' : 'gray'}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

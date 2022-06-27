import React from 'react'
import { Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';

const MovieCard = ({movie}) => {
  return (
    <div className="movie_card" id="bright">
      <Link to={`/${movie.title}`}>
    <div className="info_section">
      <div className="movie_header">
        <img className="locandina" src={movie.urlImg} alt=''/>
        <h1>{movie.title}</h1>
        <StarRatingComponent value={movie.rate} name='rate'  />
      </div>
      <div className="movie_desc">
        <p className="text">
            {movie.description}
            </p>
      </div>
    </div>
    </Link>
    </div>
      );
    }

export default MovieCard
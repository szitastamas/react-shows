import React from 'react';
import { Link } from 'react-router-dom';
import { Movie } from '../../models/Movie';
import Summary from '../card/Summary';

interface IProps {
  movie: Movie;
}
const MovieItem: React.FC<IProps> = ({ movie }) => {
  return (
    <div className='movie-list-item'>
      <div className='movie-img'>
        {movie.image ? (
          <img src={movie.image.medium} width={100} />
        ) : (
          <div className='img-placeholder'></div>
        )}
      </div>
      <div className='movie-text'>
        <div className="title-row">
          <h3 className='movie-text-title'>{movie.name}</h3>
          <Link to={`/details/${movie.id}`} className='details-link'>Details</Link>
        </div>
        <Summary summary={movie.summary} />
      </div>
    </div>
  );
};

export default MovieItem;

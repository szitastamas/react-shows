import { observer } from 'mobx-react-lite';
import React from 'react';
import { Movie } from '../../models/Movie';
import Summary from './Summary';
interface IProps {
  movie: Movie;
}
const Card: React.FC<IProps> = ({ movie }) => {
  return (
    <div>
      {movie.image && <img src={movie.image.medium} alt='movie-pic' />}
      <h1>{movie.name}</h1>
      <Summary summary={movie.summary} />
      <p>{movie.runtime}</p>
      <p>{movie.status}</p>
      <ul>
        {movie.genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
};

export default observer(Card);

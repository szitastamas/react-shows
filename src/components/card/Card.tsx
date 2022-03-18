import { observer } from 'mobx-react-lite';
import React from 'react';
import { Movie } from '../../models/Movie';
import CardBody from './CardBody';
interface IProps {
  movie: Movie;
}
const Card: React.FC<IProps> = ({ movie }) => {

  return (
    <div className='movie-card'>
      {movie.image && (
        <img src={movie.image.original} alt='movie-pic' width={500} height={660} />
      )}
      <CardBody movie={movie} />
    </div>
  );
};

export default observer(Card);

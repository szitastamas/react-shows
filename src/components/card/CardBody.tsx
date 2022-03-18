import React from 'react';
import { Movie } from '../../models/Movie';
import CardComments from './CardComments';
import CardDetails from './CardDetails';

interface IProps {
    movie: Movie
}
const CardBody: React.FC<IProps> = ({ movie }) => {
  return (
    <div className='movie-card-body'>
      <CardDetails movie={movie} />
      <hr />
      <CardComments movie={movie} />
    </div>
  );
};

export default CardBody;

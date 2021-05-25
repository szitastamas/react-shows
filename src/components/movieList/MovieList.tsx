import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import MovieStore from '../../stores/MovieStore';
import MovieItem from './MovieItem';

const MovieList = () => {
  const { movies } = useContext(MovieStore);
  return (
    <div className='movie-list'>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default observer(MovieList);

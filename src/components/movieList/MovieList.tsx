import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import RootStore from '../../stores/RootStore';
import MovieItem from './MovieItem';

const MovieList = () => {
  const { movieStore } = useContext(RootStore);
  return (
    <div className='movie-list'>
      {movieStore.movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default observer(MovieList);

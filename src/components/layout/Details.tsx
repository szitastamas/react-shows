import { observer } from 'mobx-react-lite';
import React, { Fragment, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Movie } from '../../models/Movie';
import MovieStore from '../../stores/MovieStore';
import Card from '../card/Card';

const Details = () => {
  const { id } = useParams<{ id: string }>();
  const { getMovieById } = useContext(MovieStore);

  const [movie, setMovie] = useState<Movie | undefined>();

  useEffect(() => {
    const movie = getMovieById(id);
    console.log({ ...movie });
    setMovie(movie);
  }, []);

  return (
    <div className='movie-details'>
      {!movie ? (
        <p>No movie</p>
      ) : (
        <Fragment>
            <Card movie={movie} />
        </Fragment>
      )}
    </div>
  );
};

export default observer(Details);

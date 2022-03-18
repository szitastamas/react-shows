import React from 'react'
import { Movie } from '../../models/Movie'
import Summary from './Summary'

interface IProps {
    movie: Movie
}
const CardDetails: React.FC<IProps> = ({ movie }) => {
    return (
        <div className='movie-card-body-details'>
          <h1>{movie.name}</h1>
          <Summary summary={movie.summary} />
          <p>
            <strong>Runtime:</strong> {movie.runtime}
          </p>
          <p>
            <strong>Status:</strong> {movie.status}
          </p>
          <ul className='movie-genre-list'>
            {movie.genres.map((g) => (
              <li key={g} className='movie-genre-list-item'>
                {g}
              </li>
            ))}
          </ul>
        </div>
    )
}

export default CardDetails

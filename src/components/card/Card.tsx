import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { Movie } from '../../models/Movie';
import AddComment from '../comment/AddComment';
import Comment from '../comment/Comment';
import Summary from './Summary';
interface IProps {
  movie: Movie;
}
const Card: React.FC<IProps> = ({ movie }) => {
  const [addCommentState, setAddCommentState] = useState(false);

  return (
    <div className='movie-card'>
      {movie.image && (
        <img src={movie.image.original} alt='movie-pic' width={500} height={660} />
      )}
      <div className='movie-card-body'>
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
        <hr />
        <div className='movie-card-body-comments'>
          <div className='comments-header-row'>
            <h3 className='comments-header-row-title'>Comments & Reactions</h3>
            <div className='btn-group'>
              <button
                data-open={addCommentState}
                onClick={() => setAddCommentState((prev) => !prev)}
              >
                {addCommentState ? 'Hide Comment Fields' : 'Add New Comment'}
              </button>
            </div>
          </div>
          {addCommentState ? (
            <AddComment movie={movie} />
          ) : (
            <div className='comment-container'>
              {movie.comments.length > 0 ? (
                movie.comments.map((comment) => (
                  <Comment key={comment.id} comment={comment} />
                ))
              ) : (
                <p>No comments yet</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default observer(Card);

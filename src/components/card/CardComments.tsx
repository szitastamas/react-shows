import React, { useState } from 'react';
import { Movie } from '../../models/Movie';
import AddComment from '../comment/AddComment';
import Comment from '../comment/Comment';

interface IProps {
    movie: Movie
}
const CardComments: React.FC<IProps> = ({ movie }) => {
  const [addCommentState, setAddCommentState] = useState(false);

    return (
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
    )
}

export default CardComments

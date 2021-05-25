import React, { useState } from 'react';
import { Comment } from '../../models/Comment';
import { Movie } from '../../models/Movie';
import { CommentFeedback } from '../../models/types/CommentTypes';

interface IProps {
  movie: Movie;
}
const AddComment: React.FC<IProps> = ({ movie }) => {
  const initialState = {
    title: '',
    content: '',
    feedback: CommentFeedback.neutral,
  };
  const [state, setState] =
    useState<{
      title: string;
      content: string;
      feedback: CommentFeedback;
    }>(initialState);

  const resetState = () => {
    setState(initialState);
  };

  const handleTitleChange = (value: string) => {
    setState((prev) => ({ ...prev, title: value }));
  };

  const handleContentChange = (value: string) => {
    setState((prev) => ({ ...prev, content: value }));
  };

  const handleFeedbackChange = (value: CommentFeedback) => {
    setState((prev) => ({ ...prev, feedback: value }));
  };

  const handleSave = () => {
    if (!!state.title === false || !!state.content === false) return;

    movie.addComment(new Comment(state.title, state.content, state.feedback));
    resetState();
  };

  return (
    <div className='add-comment-field'>
      <div className='title-row'>
        <input
          type='text'
          style={{ width: '80%' }}
          value={state.title}
          onChange={(event) => handleTitleChange(event.currentTarget.value)}
        />
        <div className='btn-group'>
          {Object.keys(CommentFeedback).map((item) => (
            <FeedbackButton
              key={item}
              value={item as CommentFeedback}
              activeFeedback={state.feedback}
              clickHandler={() => handleFeedbackChange(item as CommentFeedback)}
            />
          ))}
        </div>
      </div>
      <div className='content-row'>
        <textarea
          rows={10}
          style={{ width: '100%', margin: '1rem 0' }}
          value={state.content}
          onChange={(event) => handleContentChange(event.currentTarget.value)}
        />
      </div>
      <button className='save-comment-btn' onClick={handleSave}>
        Save Comment
      </button>
    </div>
  );
};

export default AddComment;

interface IButtonProps {
  value: CommentFeedback;
  activeFeedback: CommentFeedback;
  clickHandler: () => void;
}
const FeedbackButton: React.FC<IButtonProps> = ({
  value,
  activeFeedback,
  clickHandler,
}) => {
  const renderIcon = () => {
    switch (value) {
      case CommentFeedback.negative:
        return 'far fa-frown';
      case CommentFeedback.neutral:
        return 'far fa-meh-blank';
      case CommentFeedback.positive:
      default:
        return 'far fa-smile';
    }
  };

  return (
    <button
      className='feedback-button'
      data-type={value}
      data-active={value === activeFeedback}
      onClick={clickHandler}
    >
      <i className={renderIcon()}></i>
    </button>
  );
};

import React, { useContext } from 'react';
import { Comment as CommentModel } from '../../models/Comment';
import { CommentFeedback as CommentFeedbackType } from '../../models/types/CommentTypes';
import RootStore from '../../stores/RootStore';

interface IProps {
  comment: CommentModel;
}
const Comment: React.FC<IProps> = ({ comment }) => {
  return (
    <div className='comment-item'>
      <div className='title-row'>
        <h5 className='title'>{comment.title}</h5>
        <CommentFeedback feedback={comment.feedback} />
      </div>
      <p>{comment.content}</p>
    </div>
  );
};

export default Comment;

interface IFeedbackProps {
  feedback: CommentFeedbackType;
}
const CommentFeedback: React.FC<IFeedbackProps> = ({ feedback }) => {
  const { uiStore } = useContext(RootStore);

  const render = () => {
    switch (feedback) {
      case 'positive':
        return (
          <i
            className={uiStore.feedbackIcons.smile.icon}
            style={{
              marginLeft: '7px',
              fontSize: '1.3rem',
              color: uiStore.feedbackIcons.smile.color,
            }}
          ></i>
        );
      case 'negative':
        return (
          <i
            className={uiStore.feedbackIcons.sad.icon}
            style={{
              marginLeft: '7px',
              fontSize: '1.3rem',
              color: uiStore.feedbackIcons.sad.color,
            }}
          ></i>
        );
      case 'neutral':
        return (
          <i
            className={uiStore.feedbackIcons.neutral.icon}
            style={{
              marginLeft: '7px',
              fontSize: '1.3rem',
              color: uiStore.feedbackIcons.neutral.color,
            }}
          ></i>
        );
      default:
        return null;
    }
  };

  return render();
};

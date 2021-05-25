import { makeObservable, observable } from 'mobx';
import { v4 } from 'uuid';
import { CommentFeedback } from './types/CommentTypes';

export class Comment {
  id: string;
  title: string;
  content: string;
  feedback: CommentFeedback;

  constructor(
    title: string = '',
    content: string = '',
    feedback: CommentFeedback = CommentFeedback.neutral,
    id?: string
  ) {
    this.id = id ? id : v4();
    this.title = title;
    this.content = content;
    this.feedback = feedback;

    makeObservable(this, {
      title: observable,
      content: observable,
      feedback: observable,
    });
  }
}

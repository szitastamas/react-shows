import { makeObservable, observable } from 'mobx';
import { v4 } from 'uuid';
import { CommentFeedback } from './types/CommentTypes';

export class Comment {
    id: string;
    title: string;
    content: string;
    feedback: CommentFeedback = 'neutral'

    constructor(title: string = '', content: string = '', id?: string){
        this.id = id ? id : v4()
        this.title = title;
        this.content = content;

        makeObservable(this, {
            title: observable,
            content: observable,
            feedback: observable
        })
    }
}
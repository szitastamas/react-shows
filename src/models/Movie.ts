import { computed, makeObservable, observable } from "mobx";
import { Comment } from "./Comment";
import { IMovieInitialization, MovieStatusTypes } from "./types/MovieTypes";

export class Movie {
    id: string;
    name: string;
    type: string;
    genres: string[];
    status: MovieStatusTypes;
    runtime: number;
    image: {
        medium: string;
        original: string;
    };
    summary: string;
    rating: number;
    comments: Comment[];
    constructor(
        init: IMovieInitialization
    ) {
        this.id = init.id;
        this.name = init.name;
        this.type = init.type;
        this.genres = init.genres;
        this.status = init.status;
        this.runtime = init.runtime;
        this.image = init.image;
        this.summary = init.summary;
        this.rating = init.rating;
        this.comments = [];

        makeObservable(this, {
            comments: observable,
            positiveComments: computed
        })
    }

    get positiveComments(): Comment[] {
        return this.comments.filter(comment => comment.feedback === 'positive');
    }
}
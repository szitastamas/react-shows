import axios from 'axios';
import { action, makeAutoObservable, observable, runInAction } from 'mobx';
import { createContext } from 'react';
import { Movie } from '../models/Movie';

class MovieStore {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  @observable
  movies: Movie[] = [];

  @observable
  movieDetails: Movie | null = null;

  @action
  async loadByParams(params: { [key: string]: string }) {
    const GET_MOVIES_URL = 'http://api.tvmaze.com/search/shows';
    const config = { params };

    const { data } = await axios.get(GET_MOVIES_URL, config);

    runInAction(() => {
      const movies = data.map((item: any) => {
        const { id, name, type, genres, status, runtime, image, summary, rating } =
          item.show;
        return new Movie({
          id,
          name,
          type,
          genres,
          status,
          runtime,
          image,
          summary,
          rating,
        });
      });

      this.setMovies(movies);
    });
  };

  @action
  async loadById(id: string | number) {
    const GET_MOVIES_URL = 'http://api.tvmaze.com/shows';

    const { data } = await axios.get(`${GET_MOVIES_URL}/${id}`);
    const { name, type, genres, status, runtime, image, summary, rating } = data;
    runInAction(() => {
      this.movieDetails = new Movie({
        id: id.toString(),
        name,
        type,
        genres,
        status,
        runtime,
        image,
        summary,
        rating,
      });
    });
  };

  @action
  setSingleMovie(movie: Movie) {
    this.movieDetails = movie;
  }

  @action
  setMovies(movies: Movie[]) {
    this.movies = movies;
  }

  @action
  getMovieById(id: string | number) {
      const movie = this.movies.find(movie => movie.id == id)!;
      console.log(movie)
    return movie;
  }
}

export default createContext(new MovieStore());

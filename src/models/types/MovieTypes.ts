export type MovieStatusTypes =
  | 'Running'
  | 'In Development'
  | 'To Be Determined'
  | 'Ended';

export interface IMovieInitialization {
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
}

import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import rootStore from '../../stores/RootStore';
import MovieList from '../movieList/MovieList';
import CategoryFilter from './CategoryFilter';

const Overview = () => {

    const { movieStore } = useContext(rootStore);

    return (
        <div id="overview">
            <h3>Check out your favourite shows!</h3>
            <p>Choose a filtering option:</p>
            <CategoryFilter />
            <hr />

            {movieStore.movies.length > 0 ? <MovieList /> : <p>No movies to show...</p>}
        </div>
    )
}

export default observer(Overview);

import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import MovieStore from '../../stores/MovieStore';
import MovieList from '../movieList/MovieList';

const Overview = () => {

    const { movies, loadByParams } = useContext(MovieStore);

    const handleFilter = async (filter: string) => {
        await loadByParams({ "q": filter })
    }

    return (
        <div>
            <h3>Check out your favourite shows!</h3>
            <p>Choose a filtering option:</p>
            <ul>
                <li onClick={() => handleFilter('president')}>President</li>
                <li onClick={() => handleFilter('country')}>Country</li>
                <li onClick={() => handleFilter('crime')}>Crime</li>
                <li onClick={() => handleFilter('car')}>Car</li>
                <li onClick={() => handleFilter('house')}>House</li>
            </ul>
            <hr />

            {movies.length > 0 ? <MovieList /> : <p>No movies to show...</p>}
        </div>
    )
}

export default observer(Overview);

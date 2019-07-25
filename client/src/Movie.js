import React from 'react';
import { observer } from 'mobx-react';
import Default from './default.png';

const Movie = observer(({movie}) => (
    <div className="movie">
        <div><img src={movie.Poster} alt="Movie Poster" onError={
            (e) => e.target.src = Default
        }/></div>
        <p> Name: {movie.Title}</p>
        <p>Year : {movie.Year}</p>
        <p>IMDB ID{movie.imdbID}</p>
        <p>Type : {movie.Type}</p>
    </div>
));
export default Movie;
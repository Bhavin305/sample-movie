import React from 'react';
import Movie from './Movie';
import { inject, observer } from 'mobx-react';

@inject('movieStore')
@observer
class Movies extends React.Component {
    render() {
        const { movieStore : { movies, loading } } = this.props;
        return (loading ? 'Loading...' : (
            <div className="movies">
                {movies.map(movie => <Movie movie={movie} />)}
            </div>)
        );   
    }
}

export default Movies;
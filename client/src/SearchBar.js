    import React from 'react';
import { debounce } from 'lodash';
import { inject, observer } from 'mobx-react';

@inject('movieStore')
@observer
class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText : ''
        }
        this.debounceFetchMovieList = debounce(this.fetchMovieList, 300);
    }

    fetchMovieList = (keyword) => {
        const {movieStore} = this.props;
        try {
            movieStore.fetchMovies(keyword);
        } catch(err) {
            console.log(err);
        }
    }

    onSearchHandle = (event) => {
        this.setState({searchText: event.target.value });
        if(event.target.value.length > 2) {
            this.debounceFetchMovieList(event.target.value);
        }
    }

    render() {
        return(
            <div className="search-bar">
                <input type="text" onChange={this.onSearchHandle} placeholder="Search here..."/>
            </div>
        );
    }
}

export default SearchBar;
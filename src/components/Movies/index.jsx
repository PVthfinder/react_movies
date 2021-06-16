import Movie from './Movie';

import './Movies.css';

function Movies (props) {
    const {movies} = props;

    return(
        (movies) ?
        <div className="movies">
            {movies.map(item => <Movie key={item.imdbID} movie={item}/>)}
        </div> :
        <h2>Sorry, nothing :(</h2>
    );
}

export default Movies;
import React from 'react';

class Movie extends React.Component {
    render() {
        const {movie} = this.props;
        
        return(
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img 
                        className="activator" 
                        src={
                            movie.Poster === 'N/A' ? 
                            `https://via.placeholder.com/300x400?text=${movie.Title}` : 
                            movie.Poster
                        } 
                        alt={`poster` + movie.Title}
                    />
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{movie.Title}</span>
                    <p>{movie.Year} <span className="right">{movie.Type}</span></p>
                </div>
            </div>
        );
    };
}

export default Movie;
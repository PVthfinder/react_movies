import React from 'react';

class Search extends React.Component {
    state = {
        search: '',
        type: 'all'
    }

    searchHandler = (e) => {
        e.preventDefault();
        this.props.searching(this.state.search, this.state.type);
    };

    filterHandler = (e) => {
        this.setState({type: e.target.value}, () => {
            this.props.searching(this.state.search, this.state.type);
        });
    }

    render() {
        return(
            <form action="#" onSubmit={this.searchHandler}>
                <div className="input-field">
                    <input 
                        placeholder="search"
                        type="search" 
                        name="search"
                        className="validate"
                        value={this.state.search}
                        onChange={(e) => this.setState({search: e.target.value})}
                    />

                    <button type="submit" className="btn search-btn">Search</button>
                </div>

                <div className="radios">
                    <label>
                        <input 
                            name="type" 
                            type="radio"
                            value="all"
                            onChange={this.filterHandler} 
                            checked={this.state.type === 'all'}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input 
                            name="type" 
                            type="radio" 
                            value="movie"
                            onChange={this.filterHandler} 
                            checked={this.state.type === 'movie'}
                        />
                        <span>Movie</span>
                    </label>
                    <label>
                        <input 
                            name="type" 
                            type="radio"   
                            value="series"
                            onChange={this.filterHandler} 
                            checked={this.state.type === 'series'}
                        />
                        <span>Series</span>
                    </label>
                    <label>
                        <input 
                            name="type" 
                            type="radio"   
                            value="game"
                            onChange={this.filterHandler} 
                            checked={this.state.type === 'game'}
                        />
                        <span>Game</span>
                    </label>
                </div>
            </form>    
        );
    };
}

export default Search;



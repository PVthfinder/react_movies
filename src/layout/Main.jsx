import React from 'react';

import Movies from '../components/Movies/';
import Search from '../components/Search';
import Preloader from '../components/Preloader';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
    state = {
        movies: [],
        loading: true
    }

    componentDidMount(){
        console.log(process.env);
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=hobbit`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading: false}))
            .catch((error) => {
                console.error(error);
            });            
    }

    searching = (inputValue, radioValue) => {
        if(inputValue) {
            fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${inputValue}${radioValue !== 'all' ? `&type=${radioValue}` : ''}`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading: false}))
            .catch((error) => {
                console.error(error);
            });
        }
    }

    render() {
        return (
            <main className="container content">
                <Search searching={this.searching}/>
                {!this.state.loading ? <Movies movies={this.state.movies}/> : <Preloader/>}
            </main>
        );
    }
}

export default Main;
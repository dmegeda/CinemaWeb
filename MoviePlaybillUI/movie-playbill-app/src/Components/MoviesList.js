import React, {Component} from 'react';
import './MoviesList.css';

class MoviesList extends Component {

    constructor(props) {
        super(props);

        this.state = {movies: [], movieLoadError: null};
    }

    componentDidMount() {
        const url = "https://localhost:44386/api/home/";
        fetch(url)
            .then(value => value.json())
            .then(value => this.setState({movies: value}))
            .catch(err => this.setState({movieLoadError: err}));
    }

    render() {
        if(this.state.movieLoadError)
        {
            return <div>Oops! Something went wrong...</div>
        }
        return (
            <div className="MoviesList">
                <ul>
                    {
                        this.state.movies.map((movie) => {
                            return <li key={movie.id}>Title - {movie.title}; description - {movie.description}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default MoviesList;
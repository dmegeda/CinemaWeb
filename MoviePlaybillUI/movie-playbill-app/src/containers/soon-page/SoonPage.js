import React, {Component} from 'react';
import MoviesList from "../../components/movies-list/MoviesList";
import {MovieListTypes} from "../../constants/movieListTypes";
import MockMovieListFetcher from "../../utils/MockMovieListFetcher";

class SoonPage extends Component {

    state = {
        moviesList: [],
    };

    componentDidMount() {
        const movieFetcher = new MockMovieListFetcher();
        this.setState({moviesList: movieFetcher.fetchMovies().movies})
    }

    render() {
        return (
            <React.Fragment>
                <h2 className="pageSectionCaption">Скоро в прокаті</h2>
                <MoviesList movies={this.state.moviesList}/>
            </React.Fragment>
        );
    }
}

export default SoonPage;
import React, {Component} from 'react';
import {connect} from 'react-redux';
import MoviesList from "../../components/movies-list/MoviesList";
import {MovieListTypes} from "../../constants/movieListTypes";
import MockMovieListFetcher from "../../utils/MockMovieListFetcher";
import {setSoonPageMoviesActionCreator} from "../../redux/actionCreators/moviesActionCreators";

class SoonPage extends Component {
    componentDidMount() {
        this.props.setMovies(new MockMovieListFetcher().fetchMovies().movies)
    }

    render() {
        return (
            <React.Fragment>
                <h2 className="pageSectionCaption">Скоро в прокаті</h2>
                <MoviesList movies={this.props.moviesList}/>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        moviesList: state.movies.soonPageMovies
    }
};

// const mapDispatchToProps = (dispatch) => {
//     return(bindActionCreators({
//         setMovies: (moviesList) => setSoonPageMoviesActionCreator(moviesList)
//     }, dispatch))
// };

const mapDispatchToProps = (dispatch) => {
    return {
        setMovies: (moviesList) => dispatch(setSoonPageMoviesActionCreator(moviesList))
    }
};

export default SoonPage = connect(mapStateToProps, mapDispatchToProps)(SoonPage);

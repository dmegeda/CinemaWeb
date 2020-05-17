import React, {Component} from 'react';
import {connect} from 'react-redux';
import MoviesList from "../../components/movies-list/MoviesList";
import {MovieListTypes} from "../../constants/movieListTypes";
import MockMovieListFetcher from "../../utils/MockMovieListFetcher";
import {setNowPageMoviesActionCreator} from "../../redux/actionCreators/moviesActionCreators";

class NowPage extends Component {
    componentDidMount() {
        this.props.setMovies(new MockMovieListFetcher().fetchMovies().movies);
    }

    render() {
        return (
            <React.Fragment>
                <h2 className="pageSectionCaption">Зараз у кіно</h2>
                <MoviesList movies={this.props.moviesList}/>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        moviesList: state.movies.nowPageMovies
    }
};

// const mapDispatchToProps = (dispatch) => {
//     return(bindActionCreators({
//         setMovies: (moviesList) => setNowPageMoviesActionCreator(moviesList)
//     }, dispatch));
// };

const mapDispatchToProps = (dispatch) => {
    return {
        setMovies: (moviesList) => dispatch(setNowPageMoviesActionCreator(moviesList))
    }
};

export default NowPage = connect(mapStateToProps, mapDispatchToProps)(NowPage);

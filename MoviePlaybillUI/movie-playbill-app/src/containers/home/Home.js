import React, {Component} from 'react';
import {connect} from 'react-redux';
import MoviesList from "../../components/movies-list/MoviesList";
import {MovieListTypes} from "../../constants/movieListTypes";
import MockMovieListFetcher from "../../utils/MockMovieListFetcher";
import {setHomePageMoviesActionCreator} from "../../redux/actionCreators/moviesActionCreators";

class Home extends Component {
    componentDidMount() {
        this.props.setMovies(new MockMovieListFetcher().fetchMovies().movies);
    }

    render() {
        return (
            <React.Fragment>
                <h2 className="pageSectionCaption">Найкращі картини тижня</h2>
                <MoviesList movies={this.props.moviesList}/>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        moviesList: state.movies.homePageMovies
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setMovies: (moviesList) => dispatch(setHomePageMoviesActionCreator(moviesList))
    }
};


export default Home = connect(mapStateToProps, mapDispatchToProps)(Home);

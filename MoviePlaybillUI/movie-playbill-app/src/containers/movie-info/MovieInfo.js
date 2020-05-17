import React, {Component} from 'react';
import {connect} from 'react-redux';
import MovieDetails from "../../components/movie-details/MovieDetails";
import MockMovieInfoFetcher from "../../utils/MockMovieInfoFetcher";
import {setMovieForDetailsActionCreator} from "../../redux/actionCreators/moviesActionCreators";

class MovieInfo extends Component {
    componentDidMount() {
        this.props.setMovieToDisplay(new MockMovieInfoFetcher().fetchInfo(this.props.match.params.id))
    }

    render() {
        return (
            <React.Fragment>
                <MovieDetails movieData={this.props.movie}/>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movie: state.movies.movieForDetails
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setMovieToDisplay: (movie) => dispatch(setMovieForDetailsActionCreator(movie))
    }
};

export default MovieInfo = connect(mapStateToProps, mapDispatchToProps)(MovieInfo);

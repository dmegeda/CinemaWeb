import React, {Component} from 'react';
import MovieDetails from "../../components/movie-details/MovieDetails";
import MockMovieInfoFetcher from "../../utils/MockMovieInfoFetcher";

class MovieInfo extends Component {

    state = {
        movie: {}
    };

    componentDidMount() {
        const movieFetcher = new MockMovieInfoFetcher();
        this.setState({movie: movieFetcher.fetchInfo(this.props.match.params.id)})
    }

    render() {
        return (
            <React.Fragment>
                <MovieDetails movieData={this.state.movie}/>
            </React.Fragment>
        );
    }
}

export default MovieInfo;
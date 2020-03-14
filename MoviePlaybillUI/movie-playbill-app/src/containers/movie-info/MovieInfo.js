import React, {Component} from 'react';
import MovieDetails from "../../components/movie-details/MovieDetails";

class MovieInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <MovieDetails movieId={this.props.match.params.id}/>
            </React.Fragment>
        );
    }
}

export default MovieInfo;
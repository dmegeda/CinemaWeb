import React, {Component} from 'react';
import MoviePoster from "../movie-poster/MoviePoster";
import './MoviesList.css'

class MoviesList extends Component {

    render() {
        const {movies} = this.props;
        const incomingClass = this.props.className ? this.props.className + " " : "";
        return (
            <div className={incomingClass + "moviesList"}>
                {
                    movies.map((moviePoster) => {
                        const link = `/movies/${moviePoster.id}`;
                        return (
                            <MoviePoster className="posterItem" {...moviePoster} link={link} key={moviePoster.id}/>
                        )
                    })
                }
            </div>
        )
    }
}

export default MoviesList;

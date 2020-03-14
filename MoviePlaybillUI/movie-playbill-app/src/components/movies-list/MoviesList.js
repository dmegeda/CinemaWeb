import React, {Component} from 'react';
import MoviePoster from "../movie-poster/MoviePoster";
import {MovieListTypes} from "../../components/movieListTypes";
import './MoviesList.css'

class MoviesList extends Component {

    constructor(props) {
        super(props);

        this.state = {movies: [], movieLoadError: null};
    }

    componentDidMount() {
        // let url;
        //
        // switch (this.props.type) {
        //     case MovieListTypes.BEST_OF_WEEK:
        //         const moviesCount = 4;
        //         url = "https://localhost:44386/api/home/";
        //         break;
        //     case MovieListTypes.NOW_IN_THEATERS:
        //         url = "https://localhost:44386/api/home/";
        //         break;
        //     case MovieListTypes.SOON_IN_THEATERS:
        //         url = "https://localhost:44386/api/home/";
        //         break;
        //     default:
        //         url = "https://localhost:44386/api/home/";
        //         break;
        // }
        //
        // fetch(url)
        //     .then(value => value.json())
        //     .then(value => this.setState({movies: value}))
        //     .catch(err => this.setState({movieLoadError: err}));

        const movie1 = {
            "id":1,
            "title":"Деяка назва 1",
            "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbcAAAFCBAMAAACA5o5yAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAElBMVEXxdJj0lrH4ucv73OX85ez97vLRIOZgAAABOUlEQVR42u3PwRQAMAwFsCpUYQRDGEL9aQbR23+JQerkmgp25eTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk9rnO9T4bw2gyRdDp5QAAAABJRU5ErkJggg=="
        };
        const movie2 = {
            "id":2,
            "title":"Деяка назва 2",
            "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbcAAAFCBAMAAACA5o5yAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAElBMVEXxdJj0lrH4ucv73OX85ez97vLRIOZgAAABOUlEQVR42u3PwRQAMAwFsCpUYQRDGEL9aQbR23+JQerkmgp25eTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk9rnO9T4bw2gyRdDp5QAAAABJRU5ErkJggg=="
        };
        const movie3 = {
            "id":3,
            "title":"Деяка назва 3",
            "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbcAAAFCBAMAAACA5o5yAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAElBMVEXxdJj0lrH4ucv73OX85ez97vLRIOZgAAABOUlEQVR42u3PwRQAMAwFsCpUYQRDGEL9aQbR23+JQerkmgp25eTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk9rnO9T4bw2gyRdDp5QAAAABJRU5ErkJggg=="
        };
        const movie4 = {
            "id":4,
            "title":"Деяка назва 4",
            "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbcAAAFCBAMAAACA5o5yAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAElBMVEXxdJj0lrH4ucv73OX85ez97vLRIOZgAAABOUlEQVR42u3PwRQAMAwFsCpUYQRDGEL9aQbR23+JQerkmgp25eTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk9rnO9T4bw2gyRdDp5QAAAABJRU5ErkJggg=="
        };
        const movie5 = {
            "id":5,
            "title":"Деяка назва 5",
            "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbcAAAFCBAMAAACA5o5yAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAElBMVEXxdJj0lrH4ucv73OX85ez97vLRIOZgAAABOUlEQVR42u3PwRQAMAwFsCpUYQRDGEL9aQbR23+JQerkmgp25eTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk9rnO9T4bw2gyRdDp5QAAAABJRU5ErkJggg=="
        };

        const movieList = [movie1, movie2, movie3, movie4, movie5];
        this.setState({movies: movieList});
    }

    render() {
        if(this.state.movieLoadError)
        {
            return <div>Йой! Щось пішло не так...</div>
        }
        return (
            <div className={this.props.className + " moviesList"}>
                {
                    this.state.movies.map((moviePoster) => {
                        return (
                            <MoviePoster className="posterItem" {...moviePoster} />
                        )
                    })
                }
            </div>
        )
    }
}

export default MoviesList;
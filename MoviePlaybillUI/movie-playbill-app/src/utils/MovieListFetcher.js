import {MovieListTypes} from "../constants/movieListTypes";

export default class MovieListFetcher {

    fetchMovies = (movieListType) => {
        let url;
        switch (movieListType) {
            case MovieListTypes.BEST_OF_WEEK:
                url = "https://localhost:44386/api/home/";
                break;
            case MovieListTypes.NOW_IN_THEATERS:
                url = "https://localhost:44386/api/now/";
                break;
            case MovieListTypes.SOON_IN_THEATERS:
                url = "https://localhost:44386/api/soon/";
                break;
            default:
                url = "https://localhost:44386/api/home/";
                break;
        }
        let result = {
            movies: [],
            error: null
        };
        fetch(url)
            .then(value => value.json())
            .then(value => result.movies = value)
            .catch(err => result.error = err);
        return result;
    };
}

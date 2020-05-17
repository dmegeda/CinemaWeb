import {ActionTypes} from '../actionTypes/movies'

const initialState = {
    homePageMovies: [],
    nowPageMovies: [],
    soonPageMovies: [],
    movieForDetails: {}
};

export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_HOME_PAGE_MOVIES: {
            return {...state, homePageMovies: action.payload}
        }
        case ActionTypes.SET_NOW_PAGE_MOVIES: {
            return {...state, nowPageMovies: action.payload}
        }
        case ActionTypes.SET_SOON_PAGE_MOVIES: {
            return {...state, soonPageMovies: action.payload}
        }
        case ActionTypes.SET_MOVIE_FOR_DETAILS: {
            return {...state, movieForDetails: action.payload}
        }
        default:
            return state;
    }
};

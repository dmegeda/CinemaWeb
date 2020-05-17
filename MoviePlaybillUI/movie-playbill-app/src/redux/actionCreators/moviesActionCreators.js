import {ActionTypes} from "../actionTypes/movies";

export const setHomePageMoviesActionCreator = (payload) => { return {type: ActionTypes.SET_HOME_PAGE_MOVIES, payload}};
export const setNowPageMoviesActionCreator = (payload) => { return {type: ActionTypes.SET_NOW_PAGE_MOVIES, payload}};
export const setSoonPageMoviesActionCreator = (payload) => { return {type: ActionTypes.SET_SOON_PAGE_MOVIES, payload}};
export const setMovieForDetailsActionCreator = (payload) => { return {type: ActionTypes.SET_MOVIE_FOR_DETAILS, payload}};

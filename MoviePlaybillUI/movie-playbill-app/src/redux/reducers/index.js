import {combineReducers} from "redux";
import {moviesReducer} from "./moviesReducer";
import {theatersReducer} from "./theatersReducer";

const reducers = combineReducers({
    movies: moviesReducer,
    theaters: theatersReducer
});

export default reducers;

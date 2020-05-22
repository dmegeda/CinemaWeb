import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers"

const loggerMiddleware = (store) => (next) => (action) => {
    //console.log(action);
    next(action);
};

export const store = createStore(rootReducer, applyMiddleware(loggerMiddleware, thunk));

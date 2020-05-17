import {ActionTypes} from '../actionTypes/theaters'

const initialState = {
    mapDisplayingTheaters: [],
    theatersPossibleFilters: {
        theaterCompanies: [],
        movies: [],
    },
    theatersSelectedFilters: {
        theaterCompanies: [],
        movies: [],
        searchZone: "nearest"
    },
    theatersMapDefaultValues: {},
    isMapPageSidebarVisible: false,
};

export const theatersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_MAP_DISPLAYING_THEATERS: {
            return {...state, mapDisplayingTheaters: action.payload}
        }
        case ActionTypes.SET_THEATERS_POSSIBLE_FILTERS: {
            return {...state, theatersPossibleFilters: action.payload}
        }
        case ActionTypes.SET_THEATERS_SELECTED_FILTERS: {
            return {...state, theatersSelectedFilters: action.payload}
        }
        case ActionTypes.SET_THEATERS_MAP_DEFAULT_VALUES: {
            return {...state, theatersMapDefaultValues: action.payload}
        }
        case ActionTypes.SET_MAP_PAGE_SIDEBAR_VISIBILITY: {
            return {...state, isMapPageSidebarVisible: action.payload}
        }
        default:
            return state;
    }
};

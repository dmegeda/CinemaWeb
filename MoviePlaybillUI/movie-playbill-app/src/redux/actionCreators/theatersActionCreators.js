import {ActionTypes} from "../actionTypes/theaters";

export const setMapDisplayingTheatersActionCreator = (payload) => { return {type: ActionTypes.SET_MAP_DISPLAYING_THEATERS, payload}};
export const setTheatersPossibleFiltersActionCreator = (payload) => { return {type: ActionTypes.SET_THEATERS_POSSIBLE_FILTERS, payload}};
export const setTheatersSelectedFiltersActionCreator = (payload) => { return {type: ActionTypes.SET_THEATERS_SELECTED_FILTERS, payload}};
export const setTheatersMapDefaultValuesActionCreator = (payload) => { return {type: ActionTypes.SET_THEATERS_MAP_DEFAULT_VALUES, payload}};
export const setMapPageSidebarVisibilityActionCreator = (payload) => { return {type: ActionTypes.SET_MAP_PAGE_SIDEBAR_VISIBILITY, payload}};

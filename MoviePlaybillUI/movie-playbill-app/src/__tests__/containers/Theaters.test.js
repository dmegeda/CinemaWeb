import React from 'react';
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store'
import {configure, shallow, mount} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import {createLocation} from "history";
import Theaters from "../../containers/theaters/Theaters";
import TheatersMap from "../../components/theaters-map/TheatersMap";
import TheaterCriteriaBar from "../../components/theater-criteria-bar/TheaterCriteriaBar";
import TheaterMapMarker from "../../components/theater-map-marker/TheaterMapMarker";

configure({adapter: new Adapter()});

it('Theaters page shallow render', () => {
    const initialState = {};
    const mockStore = configureStore();
    const store = mockStore(initialState);
    const wrapper = shallow(<Provider store={store}><Theaters/></Provider>);
    expect(wrapper.length).toEqual(1);
});

it('Theaters page renders with map and search bar', () => {
    const initialState = {
        theaters: {
            isMapPageSidebarVisible: false,
            theatersPossibleFilters: {
                theaters: [],
                movies: []
            },
            theatersSelectedFilters: [],
            mapDisplayingTheaters: [],
            theatersMapDefaultValues: {}
        }
    };
    const mockStore = configureStore();
    const store = mockStore(initialState);
    const location = createLocation("");
    const wrapper = mount(<Provider store={store}><Theaters location={location}/></Provider>);
    const map = wrapper.find(TheatersMap);
    const searchBar = wrapper.find(TheaterCriteriaBar);
    expect(map).toHaveLength(1);
    expect(searchBar).toHaveLength(1);
});

it('Theaters page renders with map and search bar with passed options', () => {
    const initialState = {
        theaters: {
            isMapPageSidebarVisible: false,
            theatersPossibleFilters: {
                theaters: [{id: 1, companyName: "theater1"}, {id: 2, companyName: "theater2"}],
                movies: [{id: 11, title: "movie11"}, {id: 12, title: "movie12"}, {id: 13, title: "movie13"}]
            },
            theatersSelectedFilters: [],
            mapDisplayingTheaters: [{coords: {lat: 50.434341, lng: 30.527756}, siteUrl: "https://fakelink1.com"},
                {coords: {lat: 50.342613, lng: 30.892525}, siteUrl: "https://fakelink2.com"}],
            theatersMapDefaultValues: {
                mapCenter: {lat: 50.434341, lng: 30.527756},
                mapZoom: 13
            }
        }
    };
    const mockStore = configureStore();
    const store = mockStore(initialState);
    const location = createLocation();
    const wrapper = mount(<Provider store={store}><Theaters location={location}/></Provider>);
    //const mapMarkers = wrapper.find(TheaterMapMarker).length;
    const searchBarText = wrapper.find(TheaterCriteriaBar).text();
    const {theaters, movies} = initialState.theaters.theatersPossibleFilters;
    let searchBarHasAllTheaters = true, searchBarHasAllMovies = true;
    for(let theater of theaters) {
        if(!searchBarText.includes(theater.companyName)) {
            searchBarHasAllTheaters = false;
            break;
        }
    }
    for(let movie of movies) {
        if(!searchBarText.includes(movie.title)) {
            searchBarHasAllMovies = false;
            break;
        }
    }
    // expect(mapMarkers).toBe(2);
    expect(searchBarHasAllTheaters && searchBarHasAllMovies).toBeTruthy();
});

import React from 'react';
import {Provider} from "react-redux";
import {configure, shallow, mount} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import MovieInfo from "../../containers/movie-info/MovieInfo";
import MovieDetails from "../../components/movie-details/MovieDetails";

configure({adapter: new Adapter()});

it('Movie info page shallow render', () => {
    const initialState = {};
    const mockStore = configureStore();
    const store = mockStore(initialState);
    const wrapper = shallow(<Provider store={store}><MovieInfo /></Provider>);
    expect(wrapper.length).toEqual(1);
});

describe('Movie info page renders necessary elements', () => {
    const initialState = {
        movies: {
            movieForDetails: {
                image: "/fake_image",
                title: "Fake title",
                age: 10,
                originalTitle: "Fake original title",
                releaseDate: new Date(2020, 5, 5).toDateString(),
                genres: "Fake genres",
                duration: 100,
                starring: "Fake starring",
                description: "Fake description"
            }
        }
    };
    const match = {params: {}};
    const mockStore = configureStore();
    const store = mockStore(initialState);

    it('Movie info page renders movie details', () => {
        const wrapper = mount(<Provider store={store}><MovieInfo match={match}/></Provider>);
        const movieDetails = wrapper.find(MovieDetails);
        expect(movieDetails).toHaveLength(1);
    });

    it('Movie info page renders certain movie data', () => {
        const wrapper = mount(<Provider store={store}><MovieInfo match={match}/></Provider>);
        const {movieForDetails} = initialState.movies;
        expect(wrapper.text().includes(movieForDetails.title)).toBeTruthy();
        expect(wrapper.text().includes(movieForDetails.age)).toBeTruthy();
        expect(wrapper.text().includes(movieForDetails.originalTitle)).toBeTruthy();
        expect(wrapper.text().includes(movieForDetails.releaseDate)).toBeTruthy();
        expect(wrapper.text().includes(movieForDetails.genres)).toBeTruthy();
        expect(wrapper.text().includes(movieForDetails.duration)).toBeTruthy();
        expect(wrapper.text().includes(movieForDetails.starring)).toBeTruthy();
        expect(wrapper.text().includes(movieForDetails.description)).toBeTruthy();
    });
});



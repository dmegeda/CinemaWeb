import React from 'react';
import {Provider} from "react-redux";
import {configure, mount, shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import SoonPage from "../../containers/soon-page/SoonPage";
import MoviesList from "../../components/movies-list/MoviesList";
import MoviePoster from "../../components/movie-poster/MoviePoster";

configure({adapter: new Adapter()});

it('Soon page shallow render', () => {
    const initialState = {};
    const mockStore = configureStore();
    const store = mockStore(initialState);
    const wrapper = shallow(<Provider store={store}><SoonPage /></Provider>);
    expect(wrapper.length).toEqual(1);
});

it('Soon page renders movies list with movies', () => {
    const initialState = {
        movies: {
            soonPageMovies: [{id: 1}, {id: 2}, {id: 3}]
        }
    };
    const mockStore = configureStore();
    const store = mockStore(initialState);
    const wrapper = mount(<Provider store={store}><SoonPage /></Provider>);
    const moviesList = wrapper.find(MoviesList);
    const moviePosters = wrapper.find(MoviePoster);
    expect(moviesList).toHaveLength(1);
    expect(moviePosters).toHaveLength(3);
});

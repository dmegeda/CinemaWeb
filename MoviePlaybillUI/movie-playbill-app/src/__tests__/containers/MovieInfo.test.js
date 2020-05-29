import React from 'react';
import {Provider} from "react-redux";
import {configure, shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import MovieInfo from "../../containers/movie-info/MovieInfo";

configure({adapter: new Adapter()});

it('Movie info shallow render', () => {
    const initialState = {};
    const mockStore = configureStore();
    const store = mockStore(initialState);
    const wrapper = shallow(<Provider store={store}><MovieInfo /></Provider>);
    expect(wrapper.length).toEqual(1);
});

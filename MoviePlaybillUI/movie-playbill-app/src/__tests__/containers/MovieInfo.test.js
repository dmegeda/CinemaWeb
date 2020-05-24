import React from 'react';
import {Provider} from "react-redux";
import {configure, shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import MovieInfo from "../../containers/movie-info/MovieInfo";

configure({adapter: new Adapter()});

it('Movie info shallow render', () => {
    const mockStore = {
        getState: () => {},
        dispatch: () => {},
        subscribe: () => {}
    };
    const wrapper = shallow(<Provider store={mockStore}><MovieInfo /></Provider>);
    expect(wrapper.length).toEqual(1)
});

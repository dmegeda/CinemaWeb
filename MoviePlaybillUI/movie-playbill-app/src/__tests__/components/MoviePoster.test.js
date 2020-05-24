import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import MoviePoster from "../../components/movie-poster/MoviePoster";

configure({adapter: new Adapter()});

it('Movie poster shallow render', () => {
    const wrapper = shallow(<MoviePoster />);
    expect(wrapper.length).toEqual(1)
});

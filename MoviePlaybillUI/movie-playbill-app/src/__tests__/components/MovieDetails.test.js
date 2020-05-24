import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import MovieDetails from "../../components/movie-details/MovieDetails";

configure({adapter: new Adapter()});

it('Movie details shallow render', () => {
    const wrapper = shallow(<MovieDetails movieData />);
    expect(wrapper.length).toEqual(1)
});

import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import MoviesList from "../../components/movies-list/MoviesList";

configure({adapter: new Adapter()});

it('Movies list shallow render', () => {
    const movies = [];
    const wrapper = shallow(<MoviesList movies={movies} />);
    expect(wrapper.length).toEqual(1)
});

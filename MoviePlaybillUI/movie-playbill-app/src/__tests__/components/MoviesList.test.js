import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import MoviesList from "../../components/movies-list/MoviesList";
import MoviePoster from "../../components/movie-poster/MoviePoster";

configure({adapter: new Adapter()});

it('Movies list shallow render', () => {
    const movies = [];
    const wrapper = shallow(<MoviesList movies={movies} />);
    expect(wrapper.length).toEqual(1)
});

it('Movies list renders all movies passed in it', () => {
    const mockMovies = [{id: 1}, {id: 2}, {id: 3}];
    const wrapper = shallow(<MoviesList movies={mockMovies} />);
    const children = wrapper.find(MoviePoster);
    expect(children.length).toBe(3);
});

it('Movies list renders movies with links', () => {
    const mockMovies = [{id: 1}, {id: 2}, {id: 3}];
    const wrapper = shallow(<MoviesList movies={mockMovies} />);
    const children = wrapper.find(MoviePoster);
    const childrenWithLinks = children.findWhere(el => el.props().hasOwnProperty('link'));
    expect(childrenWithLinks.length).toBe(children.length);
});

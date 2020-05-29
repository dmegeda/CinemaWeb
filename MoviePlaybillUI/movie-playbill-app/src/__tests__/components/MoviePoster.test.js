import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import MoviePoster from "../../components/movie-poster/MoviePoster";

configure({adapter: new Adapter()});

it('Movie poster shallow render', () => {
    const wrapper = shallow(<MoviePoster />);
    expect(wrapper.length).toEqual(1)
});

it("Movie poster renders with link, image and title", () => {
    const fakeMovieData = {
        link: "https://fakelink.com",
        image: "/images/fake_image.jpg",
        title: "Fake title"
    };
    const wrapper = shallow(<MoviePoster {...fakeMovieData} />);
    const movieLink = wrapper.find('a').prop('href');
    const posterSrc = wrapper.find('.posterPicture').prop('src');
    const titleText = wrapper.find('.movieTitle').text();
    expect(movieLink).toBe(fakeMovieData.link);
    expect(posterSrc).toBe(fakeMovieData.image);
    expect(titleText).toBe(fakeMovieData.title);
});

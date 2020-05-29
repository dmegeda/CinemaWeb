import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import MovieDetails from "../../components/movie-details/MovieDetails";

configure({adapter: new Adapter()});

it('Movie details shallow render', () => {
    const wrapper = shallow(<MovieDetails movieData />);
    expect(wrapper.length).toEqual(1)
});

it("Movie details renders with all movie data", () => {
    const fakeMovieData = {
        image: "/fake_image",
        title: "Fake title",
        age: 10,
        originalTitle: "Fake original title",
        releaseDate: new Date(2020, 5, 5).toDateString(),
        genres: "Fake genres",
        duration: 100,
        starring: "Fake starring",
        description: "Fake description"
    };
    const wrapper = shallow(<MovieDetails movieData={fakeMovieData} />);
    const imageSrc = wrapper.find('img').prop('src');
    expect(imageSrc).toBe(fakeMovieData.image);
    expect(wrapper.text().includes(fakeMovieData.title)).toBeTruthy();
    expect(wrapper.text().includes(fakeMovieData.age)).toBeTruthy();
    expect(wrapper.text().includes(fakeMovieData.originalTitle)).toBeTruthy();
    expect(wrapper.text().includes(fakeMovieData.releaseDate)).toBeTruthy();
    expect(wrapper.text().includes(fakeMovieData.genres)).toBeTruthy();
    expect(wrapper.text().includes(fakeMovieData.duration)).toBeTruthy();
    expect(wrapper.text().includes(fakeMovieData.starring)).toBeTruthy();
    expect(wrapper.text().includes(fakeMovieData.description)).toBeTruthy();
});

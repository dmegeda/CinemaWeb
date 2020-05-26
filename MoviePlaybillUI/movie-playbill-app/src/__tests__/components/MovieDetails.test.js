import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "@testing-library/react";
import MovieDetails from "../../components/movie-details/MovieDetails";

configure({adapter: new Adapter()});

let container = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

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

    act(() => {
        render(<MovieDetails movieData={fakeMovieData} />, container);
    });

    expect(container.getElementsByTagName('img')[0].getAttribute('src')).toBe(fakeMovieData.image);
    expect(container.innerHTML.indexOf(fakeMovieData.title)).not.toBe(-1);
    expect(container.innerHTML.indexOf(fakeMovieData.age)).not.toBe(-1);
    expect(container.innerHTML.indexOf(fakeMovieData.originalTitle)).not.toBe(-1);
    expect(container.innerHTML.indexOf(fakeMovieData.releaseDate)).not.toBe(-1);
    expect(container.innerHTML.indexOf(fakeMovieData.genres)).not.toBe(-1);
    expect(container.innerHTML.indexOf(fakeMovieData.duration)).not.toBe(-1);
    expect(container.innerHTML.indexOf(fakeMovieData.starring)).not.toBe(-1);
    expect(container.innerHTML.indexOf(fakeMovieData.description)).not.toBe(-1);
});

import React from 'react';
import {act} from "@testing-library/react";
import {render, unmountComponentAtNode} from "react-dom";
import {configure, shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import MoviePoster from "../../components/movie-poster/MoviePoster";

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

    act(() => {
        render(<MoviePoster {...fakeMovieData} />, container);
    });
    expect(container.getElementsByTagName('a')[0].getAttribute('href')).toBe(fakeMovieData.link);
    expect(container.getElementsByClassName('posterPicture')[0].getAttribute('src')).toBe(fakeMovieData.image);
    expect(container.getElementsByClassName('movieTitle')[0].innerHTML).toBe(fakeMovieData.title);
});

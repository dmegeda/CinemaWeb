import React from 'react';
import {act} from "@testing-library/react";
import {render, unmountComponentAtNode} from "react-dom";
import {configure, shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import Header from "../../components/header/Header";
import SideMenu from "../../components/header/side-menu/SideMenu";

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

it('Header shallow render', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.length).toEqual(1)
});

it("Header renders with home link", () => {
    act(() => {
        render(<Header/>, container);
    });
    expect(container.getElementsByTagName('a')[0].getAttribute('href')).toBe("/");
});

it("Header renders with side menu", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.containsMatchingElement(<SideMenu />)).toEqual(true);
});

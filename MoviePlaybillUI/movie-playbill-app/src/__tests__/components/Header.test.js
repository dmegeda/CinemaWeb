import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import Header from "../../components/header/Header";
import SideMenu from "../../components/header/side-menu/SideMenu";

configure({adapter: new Adapter()});

it('Header shallow render', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.length).toEqual(1)
});

it("Header renders with home link", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('a').prop('href')).toBe("/");
});

it("Header renders with side menu", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.containsMatchingElement(<SideMenu />)).toEqual(true);
});

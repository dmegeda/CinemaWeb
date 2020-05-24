import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import Header from "../../components/header/Header";

configure({adapter: new Adapter()});

it('Header shallow render', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.length).toEqual(1)
});

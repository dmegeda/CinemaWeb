import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import NotFoundPage from "../../containers/not-found-page/NotFoundPage";

configure({adapter: new Adapter()});

it('Not found page shallow render', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper.length).toEqual(1);
});

it("Not found page renders with home link", () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper.find('a').prop('href')).toBe("/");
});

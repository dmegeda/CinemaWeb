import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import NotFoundPage from "../../containers/not-found-page/NotFoundPage";

configure({adapter: new Adapter()});

it('Not found page shallow render', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper.length).toEqual(1)
});

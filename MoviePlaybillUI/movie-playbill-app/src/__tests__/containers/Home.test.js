import React from 'react';
import {Provider} from "react-redux";
import {configure, shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import Home from "../../containers/home/Home";

configure({adapter: new Adapter()});

it('Home page shallow render', () => {
    const mockStore = {
        getState: () => {},
        dispatch: () => {},
        subscribe: () => {}
    };
    const wrapper = shallow(<Provider store={mockStore}><Home /></Provider>);
    expect(wrapper.length).toEqual(1)
});

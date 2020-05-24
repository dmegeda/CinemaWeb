import React from 'react';
import {Provider} from 'react-redux'
import {configure, shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import Theaters from "../../containers/theaters/Theaters";

configure({adapter: new Adapter()});

it('Theaters page shallow render', () => {
    const mockStore = {
        getState: () => {},
        dispatch: () => {},
        subscribe: () => {}
    };
    const wrapper = shallow(<Provider store={mockStore}><Theaters /></Provider>);
    expect(wrapper.length).toEqual(1)
});

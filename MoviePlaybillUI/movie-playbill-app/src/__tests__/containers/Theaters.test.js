import React from 'react';
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store'
import {configure, shallow, mount} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import Theaters from "../../containers/theaters/Theaters";

configure({adapter: new Adapter()});

it('Theaters page shallow render', () => {
    const initialState = {};
    const mockStore = configureStore();
    const store = mockStore(initialState);
    const wrapper = shallow(<Provider store={store}><Theaters /></Provider>);
    expect(wrapper.length).toEqual(1);
});

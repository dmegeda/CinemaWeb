import React from 'react';
import {Provider} from "react-redux";
import {configure, shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import SoonPage from "../../containers/soon-page/SoonPage";

configure({adapter: new Adapter()});

it('Soon page shallow render', () => {
    const mockStore = {
        getState: () => {},
        dispatch: () => {},
        subscribe: () => {}
    };
    const wrapper = shallow(<Provider store={mockStore}><SoonPage /></Provider>);
    expect(wrapper.length).toEqual(1)
});

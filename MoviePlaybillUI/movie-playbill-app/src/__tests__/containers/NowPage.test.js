import React from 'react';
import {Provider} from "react-redux";
import {configure, shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import NowPage from "../../containers/now-page/NowPage";

configure({adapter: new Adapter()});

it('Now page shallow render', () => {
    const mockStore = {
        getState: () => {},
        dispatch: () => {},
        subscribe: () => {}
    };
    const wrapper = shallow(<Provider store={mockStore}><NowPage /></Provider>);
    expect(wrapper.length).toEqual(1)
});

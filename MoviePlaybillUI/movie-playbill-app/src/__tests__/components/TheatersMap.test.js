import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import TheatersMap from "../../components/theaters-map/TheatersMap";

configure({adapter: new Adapter()});

it('Theaters map shallow render', () => {
    const wrapper = shallow(<TheatersMap />);
    expect(wrapper.length).toEqual(1)
});

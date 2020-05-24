import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import TheaterMapMarker from "../../components/theater-map-marker/TheaterMapMarker";

configure({adapter: new Adapter()});

it('Theater map marker shallow render', () => {
    const wrapper = shallow(<TheaterMapMarker />);
    expect(wrapper.length).toEqual(1)
});

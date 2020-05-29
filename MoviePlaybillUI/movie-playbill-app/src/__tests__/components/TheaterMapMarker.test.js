import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import TheaterMapMarker from "../../components/theater-map-marker/TheaterMapMarker";

configure({adapter: new Adapter()});

it('Theater map marker shallow render', () => {
    const wrapper = shallow(<TheaterMapMarker />);
    expect(wrapper.length).toEqual(1)
});

it('Theater page opens when click a marker', () => {
    const fakeLink = "https://fakelink.com";
    global.open = jest.fn();
    const wrapper = shallow(<TheaterMapMarker link={fakeLink}/>);
    wrapper.simulate('click');
    expect(global.open).toBeCalled();
});

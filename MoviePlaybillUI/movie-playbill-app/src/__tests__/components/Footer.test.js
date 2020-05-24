import React from 'react';
import {shallow, configure} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import Footer from '../../components/footer/Footer';

configure({adapter: new Adapter()});

it('Footer shallow render', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.length).toEqual(1)
});

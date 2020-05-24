import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import OutsideAlerter from "../../components/outside-alerter/OutsideAlerter";

configure({adapter: new Adapter()});

it('Outside alerter shallow render', () => {
    const wrapper = shallow(<OutsideAlerter />);
    expect(wrapper.length).toEqual(1)
});

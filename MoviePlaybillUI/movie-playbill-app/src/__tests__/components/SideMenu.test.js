import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import SideMenu from "../../components/header/side-menu/SideMenu";

configure({adapter: new Adapter()});

it('Side menu shallow render', () => {
    const wrapper = shallow(<SideMenu />);
    expect(wrapper.length).toEqual(1)
});

// it("Side menu renders with close and open buttons", () => {
//     const wrapper = shallow(<SideMenu />);
//     const closeNavBtn = wrapper.find('.closeNavBtn');
//     closeNavBtn.simulate('click');
//     const menuStyle = wrapper.find('#sidenavMenu').props().style;
//     expect(menuStyle).toHaveProperty('width', '0');
// });

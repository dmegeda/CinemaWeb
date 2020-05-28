import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import PageContent from "../../components/page-content/PageContent";

configure({adapter: new Adapter()});

it('Page content shallow render', () => {
    const wrapper = shallow(<PageContent />);
    expect(wrapper.length).toEqual(1)
});

it('Page content renders with children', () => {
    const wrapper = shallow(<PageContent><p>Fake text</p></PageContent>);
    const pElement = wrapper.find('p');
    expect(pElement.text()).toBe("Fake text");
});

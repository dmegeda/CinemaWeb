import React from 'react';
import {shallow, configure} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import TheaterCriteriaBar from "../../components/theater-criteria-bar/TheaterCriteriaBar";

configure({adapter: new Adapter()});

it('Theater criteria bar shallow render', () => {
    const filterOptions = {
        theaters: [],
        movies: []
    };
    const wrapper = shallow(<TheaterCriteriaBar filterOptions={filterOptions} />);
    expect(wrapper.length).toEqual(1)
});

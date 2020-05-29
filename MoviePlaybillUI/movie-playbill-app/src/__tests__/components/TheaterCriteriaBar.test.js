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

it('Theater criteria bar returns selected options on search button click', () => {
    const mockFilterOptions = {
        theaters: [
            {id: 1, companyName: "1"},
            {id: 2, companyName: "2"},
        ],
        movies: [
            {id: 11, title: "11"},
            {id: 12, title: "12"},
        ]
    };
    const preSelectedOptions = {theaters: [1], movies: [12], searchZone: "nearest"};
    let postSelectedOptions = {};
    const wrapper = shallow(<TheaterCriteriaBar filterOptions={mockFilterOptions} updateData={selected => postSelectedOptions = selected} />);
    wrapper.setProps({selectedOptions: preSelectedOptions});
    wrapper.find('#searchBtn').simulate('click');
    expect(JSON.stringify(postSelectedOptions)).toEqual(JSON.stringify(preSelectedOptions));
});

it('Theater criteria bar renders with all passed options', () => {
    const mockFilterOptions = {
        theaters: [
            {id: 1, companyName: "fakeTheater1"},
            {id: 2, companyName: "fakeTheater2"},
        ],
        movies: [
            {id: 11, title: "fakeMovie11"},
            {id: 12, title: "fakeMovie12"},
        ]
    };
    const wrapper = shallow(<TheaterCriteriaBar filterOptions={mockFilterOptions} />);
    // const barInputs = wrapper.find('input').findWhere(item => item.props().name.startsWith('theater'));
    const theatersPresent = wrapper.text().includes('fakeTheater1') && wrapper.text().includes('fakeTheater2');
    const moviesPresent = wrapper.text().includes('fakeMovie11') && wrapper.text().includes('fakeMovie12');
    expect(theatersPresent).toBeTruthy();
    expect(moviesPresent).toBeTruthy();
});

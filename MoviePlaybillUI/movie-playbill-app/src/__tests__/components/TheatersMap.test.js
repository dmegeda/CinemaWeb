import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import TheatersMap from "../../components/theaters-map/TheatersMap";

configure({adapter: new Adapter()});

it('Theaters map shallow render', () => {
    const wrapper = shallow(<TheatersMap />);
    expect(wrapper.length).toEqual(1)
});

// it('Theaters map renders with markers', () => {
//     const initialOptions = {
//         markers: [],
//         defaultCenter: {
//             lat: 50.434341,
//             lng: 30.527756
//         },
//         defaultZoom: 13
//     };
//     const wrapper = mount(<TheatersMap markers={initialOptions.markers} defaultCenter={initialOptions.defaultCenter}
//                                        defaultZoom={initialOptions.defaultZoom} />);
//     const mockMapOptions = {
//         markers: [
//             {
//                 coords: {
//                     lat: 50.434341,
//                     lng: 30.527756
//                 },
//                 siteUrl: "https://fakelink1.com"
//             },
//             {
//                 coords: {
//                     lat: 50.342613,
//                     lng: 30.892525
//                 },
//                 siteUrl: "https://fakelink2.com"
//             }
//         ],
//         defaultCenter: {
//             lat: 50.434341,
//             lng: 30.527756
//         },
//         defaultZoom: 13
//     };
//     wrapper.setProps(mockMapOptions);
//     const mapMarkers = wrapper.find(TheaterMapMarker);
//     expect(mapMarkers).toHaveLength(2);
// });

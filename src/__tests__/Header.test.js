/**
 * @jest-environment jsdom
 */

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Header from './../components/Header';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('h1 should be rendered', () => {
    const wrapper = shallow(<Header />);
    const headerOne = wrapper.find('[data-test="header-one"]');
    expect(headerOne.length).toBe(1);
});

test('h1 should contain the text "Series"', () => {
    const wrapper = shallow(<Header />);
    const headerOne = wrapper.find('[data-test="header-one"]');
    expect(headerOne.text()).toContain('Series');
})
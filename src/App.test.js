/**
 * @jest-environment jsdom
 */

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the App component
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {any} state - Initial state for setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
    return shallow(<App {...props} />)
}

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search with
 * @param {string} val - Value of data-test attribute for search
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}

test('renders without crashing', () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, 'component-app');
    expect(appComponent.length).toBe(1);
});

test('h1 should be rendered', () => {
    const wrapper = setup();
    const headerOne = findByTestAttr(wrapper, 'header-one');
    expect(headerOne.length).toBe(1);
});

test('expect h1 to have "Series" text', () => {
    const wrapper = setup();
    const headerOne = findByTestAttr(wrapper, 'header-one');
    expect(headerOne.text()).toContain('Series');
});
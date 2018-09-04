import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Header from './../Header';


Enzyme.configure({ adapter: new Adapter() });

it('header should have "ui header" classes', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.prop('className')).toEqual('ui header');
})

it('renders a h1 with specific text', () => {
  const wrapper = shallow(<Header name="Floyd" />);
  console.log(wrapper);
  expect(wrapper.text()).toEqual('Floyd - Find your favorite series');
})

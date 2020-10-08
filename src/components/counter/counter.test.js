import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Component from './';

describe('Counter component', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<Component />).toJSON();
    expect(tree).toMatchSnapshot();
  });

   it('starts with count 0', () => {
     const wrapper = shallow(<Component />);
     const text = wrapper.find('p').text();
     expect(text).toEqual('Current count: 0');
   });

   it('can increment count when increment button is clicked', () => {
      const wrapper = shallow(<Component />);
      const action = wrapper.find('button.increment')

      action.simulate('click');

      const text = wrapper.find('p').text();
      expect(text).toEqual('Current count: 1');
   });

   it('can decrement count when increment button is clicked', () => {
     const wrapper = shallow(<Component />);
     const action = wrapper.find('button.decrement')

     action.simulate('click');

     const text = wrapper.find('p').text();
     expect(text).toEqual('Current count: -1');
  });
});

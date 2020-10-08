import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders welcome message', () => {
  const wrapper = shallow(<App />);
  const welcomeTitle = <h2>Testing talk</h2>;
  expect(wrapper.contains(welcomeTitle)).toEqual(true);
});

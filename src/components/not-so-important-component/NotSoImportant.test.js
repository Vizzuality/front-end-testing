import React from 'react';
import renderer from 'react-test-renderer';

import Component from './';

describe('NotSoImportant component', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<Component />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

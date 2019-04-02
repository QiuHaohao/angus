import React from 'react';
import { shallow } from 'enzyme';
import { Angus } from '../../../src/features/angus';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Angus />);
  expect(renderedComponent.find('.angus-angus').length).toBe(1);
});

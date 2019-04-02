import React from 'react';
import { shallow } from 'enzyme';
import { AngusIcon } from '../../../src/features/angus';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<AngusIcon />);
  expect(renderedComponent.find('.angus-angus-icon').length).toBe(1);
});

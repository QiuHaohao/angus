import React from 'react';
import { shallow } from 'enzyme';
import { Bubble } from '../../../src/features/bubbles';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Bubble />);
  expect(renderedComponent.find('.bubbles-bubble').length).toBe(1);
});

import React from 'react';
import { shallow } from 'enzyme';
import { AutoSizedBubbles } from '../../../src/features/bubbles';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<AutoSizedBubbles />);
  expect(renderedComponent.find('.bubbles-auto-sized-bubbles').length).toBe(1);
});

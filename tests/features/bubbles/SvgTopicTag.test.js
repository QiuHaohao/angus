import React from 'react';
import { shallow } from 'enzyme';
import { SvgTopicTag } from '../../../src/features/bubbles';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<SvgTopicTag />);
  expect(renderedComponent.find('.bubbles-svg-topic-tag').length).toBe(1);
});

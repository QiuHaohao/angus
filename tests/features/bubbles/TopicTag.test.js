import React from 'react';
import { shallow } from 'enzyme';
import { TopicTag } from '../../../src/features/bubbles';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<TopicTag />);
  expect(renderedComponent.find('.bubbles-topic-tag').length).toBe(1);
});

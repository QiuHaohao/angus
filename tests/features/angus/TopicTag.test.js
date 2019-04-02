import React from 'react';
import { shallow } from 'enzyme';
import { TopicTag } from '../../../src/features/angus';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<TopicTag />);
  expect(renderedComponent.find('.angus-topic-tag').length).toBe(1);
});

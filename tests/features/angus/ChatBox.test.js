import React from 'react';
import { shallow } from 'enzyme';
import { ChatBox } from '../../../src/features/angus';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<ChatBox />);
  expect(renderedComponent.find('.angus-chat-box').length).toBe(1);
});

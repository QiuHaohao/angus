import React from 'react';
import { shallow } from 'enzyme';
import { TopicTagList } from '../../../src/features/angus/TopicTagList';

describe('angus/TopicTagList', () => {
  it('renders node with correct class name', () => {
    const props = {
      angus: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <TopicTagList {...props} />
    );

    expect(
      renderedComponent.find('.angus-topic-tag-list').length
    ).toBe(1);
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import { ArticleList } from '../../../src/features/bubbles';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<ArticleList />);
  expect(renderedComponent.find('.bubbles-article-list').length).toBe(1);
});

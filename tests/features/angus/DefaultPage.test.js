import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/angus/DefaultPage';

describe('angus/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      angus: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.angus-default-page').length
    ).toBe(1);
  });
});

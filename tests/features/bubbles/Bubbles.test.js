import React from 'react';
import { shallow } from 'enzyme';
import { Bubbles } from '../../../src/features/bubbles/Bubbles';

describe('bubbles/Bubbles', () => {
  it('renders node with correct class name', () => {
    const props = {
      bubbles: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Bubbles {...props} />
    );

    expect(
      renderedComponent.find('.bubbles-bubbles').length
    ).toBe(1);
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import { ConnectedAutoSizedBubbles } from '../../../src/features/bubbles/ConnectedAutoSizedBubbles';

describe('bubbles/ConnectedAutoSizedBubbles', () => {
  it('renders node with correct class name', () => {
    const props = {
      bubbles: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <ConnectedAutoSizedBubbles {...props} />
    );

    expect(
      renderedComponent.find('.bubbles-connected-auto-sized-bubbles').length
    ).toBe(1);
  });
});

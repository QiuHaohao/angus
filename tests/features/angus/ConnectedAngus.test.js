import React from 'react';
import { shallow } from 'enzyme';
import { ConnectedAngus } from '../../../src/features/angus/ConnectedAngus';

describe('angus/ConnectedAngus', () => {
  it('renders node with correct class name', () => {
    const props = {
      angus: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <ConnectedAngus {...props} />
    );

    expect(
      renderedComponent.find('.angus-connected-angus').length
    ).toBe(1);
  });
});

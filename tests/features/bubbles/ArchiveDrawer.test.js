import React from 'react';
import { shallow } from 'enzyme';
import { ArchiveDrawer } from '../../../src/features/bubbles/ArchiveDrawer';

describe('bubbles/ArchiveDrawer', () => {
  it('renders node with correct class name', () => {
    const props = {
      bubbles: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <ArchiveDrawer {...props} />
    );

    expect(
      renderedComponent.find('.bubbles-archive-drawer').length
    ).toBe(1);
  });
});

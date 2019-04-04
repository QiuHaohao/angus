import {
  BUBBLES_ACTION_TOGGLE_DRAWER,
} from '../../../../src/features/bubbles/redux/constants';

import {
  actionToggleDrawer,
  reducer,
} from '../../../../src/features/bubbles/redux/actionToggleDrawer';

describe('bubbles/redux/actionToggleDrawer', () => {
  it('returns correct action by actionToggleDrawer', () => {
    expect(actionToggleDrawer()).toHaveProperty('type', BUBBLES_ACTION_TOGGLE_DRAWER);
  });

  it('handles action type BUBBLES_ACTION_TOGGLE_DRAWER correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: BUBBLES_ACTION_TOGGLE_DRAWER }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});

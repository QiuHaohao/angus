import {
  BUBBLES_ACTION_SET_HOVER,
} from '../../../../src/features/bubbles/redux/constants';

import {
  actionSetHover,
  reducer,
} from '../../../../src/features/bubbles/redux/actionSetHover';

describe('bubbles/redux/actionSetHover', () => {
  it('returns correct action by actionSetHover', () => {
    expect(actionSetHover()).toHaveProperty('type', BUBBLES_ACTION_SET_HOVER);
  });

  it('handles action type BUBBLES_ACTION_SET_HOVER correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: BUBBLES_ACTION_SET_HOVER }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});

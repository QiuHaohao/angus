import {
  BUBBLES_ACTION_MOVE_ARTICLE_TO_ARCHIVE,
} from '../../../../src/features/bubbles/redux/constants';

import {
  actionMoveArticleToArchive,
  reducer,
} from '../../../../src/features/bubbles/redux/actionMoveArticleToArchive';

describe('bubbles/redux/actionMoveArticleToArchive', () => {
  it('returns correct action by actionMoveArticleToArchive', () => {
    expect(actionMoveArticleToArchive()).toHaveProperty('type', BUBBLES_ACTION_MOVE_ARTICLE_TO_ARCHIVE);
  });

  it('handles action type BUBBLES_ACTION_MOVE_ARTICLE_TO_ARCHIVE correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: BUBBLES_ACTION_MOVE_ARTICLE_TO_ARCHIVE }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});

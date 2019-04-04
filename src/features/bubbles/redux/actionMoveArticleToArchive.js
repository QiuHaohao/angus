// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  BUBBLES_ACTION_MOVE_ARTICLE_TO_ARCHIVE,
} from './constants';

const _ = require('lodash');

export function actionMoveArticleToArchive(id) {
  return {
    type: BUBBLES_ACTION_MOVE_ARTICLE_TO_ARCHIVE,
    id
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case BUBBLES_ACTION_MOVE_ARTICLE_TO_ARCHIVE:
      return {
        ...state,
        articleIds: _.filter(state.articleIds, id => id !== action.id),
        archivedArticleIds: state.archivedArticleIds.includes(action.id) 
          ? state.archivedArticleIds
          : [action.id, ...state.archivedArticleIds]
      };

    default:
      return state;
  }
}

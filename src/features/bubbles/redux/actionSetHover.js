// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  BUBBLES_ACTION_SET_HOVER,
} from './constants';

export function actionSetHover(id) {
  return {
    type: BUBBLES_ACTION_SET_HOVER,
    id
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case BUBBLES_ACTION_SET_HOVER:
      return {
        ...state,
        hovering: action.id,        
      };

    default:
      return state;
  }
}

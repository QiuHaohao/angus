// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  BUBBLES_ACTION_TOGGLE_DRAWER,
} from './constants';

export function actionToggleDrawer() {
  return {
    type: BUBBLES_ACTION_TOGGLE_DRAWER,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case BUBBLES_ACTION_TOGGLE_DRAWER:
      return {
        ...state,
        drawerVisible: !state.drawerVisible
      };

    default:
      return state;
  }
}

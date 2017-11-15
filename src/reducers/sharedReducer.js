import {
  SHOW_COMMENT_LIST,
  HIDE_COMMENT_LIST,
  SHOW_SHARE_MODAL,
  HIDE_SHARE_MODAL
} from '../actions/shared/sharedTypes';

const initialState = {
  isCommentListVisible: true,
  isShareModalOpen: false
};

export default function sharedReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_COMMENT_LIST:
      return Object.assign({}, state, {
        isCommentListVisible: true,
      });
    case HIDE_COMMENT_LIST:
      return Object.assign({}, state, {
        isCommentListVisible: false,
      });
    case SHOW_SHARE_MODAL:
      return Object.assign({}, state, {
        isShareModalOpen: true,
      });
    case HIDE_SHARE_MODAL:
      return Object.assign({}, state, {
        isShareModalOpen: false,
      });
    default:
      return state;
  }
}

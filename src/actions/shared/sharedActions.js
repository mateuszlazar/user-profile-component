import {
  SHOW_COMMENT_LIST,
  HIDE_COMMENT_LIST,
  SHOW_SHARE_MODAL,
  HIDE_SHARE_MODAL
} from './sharedTypes';

export function showCommentList() {
  return {
    type: SHOW_COMMENT_LIST
  };
}

export function hideCommentList() {
  return {
    type: HIDE_COMMENT_LIST
  };
}

export function showShareModal() {
  return {
    type: SHOW_SHARE_MODAL
  };
}

export function hideShareModal() {
  return {
    type: HIDE_SHARE_MODAL
  };
}

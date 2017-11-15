import demoAPIMethods from '../../mock/demoAPI';
import {
    FETCH_USER_PROFILE,
    FETCH_USER_PROFILE_SUCCESS,
    FETCH_USER_PROFILE_FAILED,
    LIKE_USER_PROFILE,
    UNLIKE_USER_PROFILE,
    FOLLOW_USER_PROFILE,
    UNFOLLOW_USER_PROFILE,
    ADD_NEW_COMMENT
} from './profileTypes';

export function fetchUserProfileSuccess(payload) {
  return {
    type: FETCH_USER_PROFILE_SUCCESS,
    payload,
  };
}

export function fetchUserProfileFailed(errorMsg) {
  return {
    type: FETCH_USER_PROFILE_FAILED,
    errorMsg,
  };
}

export function fetchUserProfile() {
  return function action(dispatch) {
    dispatch({ type: FETCH_USER_PROFILE });
    const request = demoAPIMethods.getUserProfile();

    return request.then(
      response => dispatch(fetchUserProfileSuccess(response)),
      err => dispatch(fetchUserProfileFailed(err))
    );
  };
}

export function likeUserProfile() {
  return {
    type: LIKE_USER_PROFILE
  };
}

export function unlikeUserProfile() {
  return {
    type: UNLIKE_USER_PROFILE
  };
}

export function followUserProfile() {
  return {
    type: FOLLOW_USER_PROFILE
  };
}

export function unfollowUserProfile() {
  return {
    type: UNFOLLOW_USER_PROFILE
  };
}

export function addNewComment(payload) {
  return {
    type: ADD_NEW_COMMENT,
    payload
  };
}

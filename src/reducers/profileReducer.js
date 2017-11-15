import _ from 'lodash';
import { mockedProfile } from '../mock/profile';
import {
    FETCH_USER_PROFILE,
    FETCH_USER_PROFILE_SUCCESS,
    FETCH_USER_PROFILE_FAILED,
    LIKE_USER_PROFILE,
    UNLIKE_USER_PROFILE,
    FOLLOW_USER_PROFILE,
    UNFOLLOW_USER_PROFILE,
    ADD_NEW_COMMENT,
} from '../actions/profile/profileTypes';

const initialState = {
  errorMessage: '',
  newComment: '',
  isError: false,
  isLoading: true,
  userData: mockedProfile
};

export default function profileReducer(state = initialState, action) {
  const newState = state;
  const { likeCount, followersCount } = state.userData.details;

  switch (action.type) {
    case FETCH_USER_PROFILE:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case FETCH_USER_PROFILE_SUCCESS:
      return Object.assign({}, state, {
        userData: action.payload,
        isError: false,
        isLoading: false,
      });
    case FETCH_USER_PROFILE_FAILED:
      return Object.assign({}, state, {
        errorMessage: 'Something went wrong. Try again later.',
        isError: true,
        isLoading: false,
      });
    case LIKE_USER_PROFILE:
      _.set(newState, 'userData.details.hasProfileLike', true);
      _.set(newState, 'userData.details.likeCount', likeCount + 1);
      return Object.assign({}, state, newState);
    case UNLIKE_USER_PROFILE:
      _.set(newState, 'userData.details.hasProfileLike', false);
      _.set(newState, 'userData.details.likeCount', likeCount - 1);
      return Object.assign({}, state, newState);
    case FOLLOW_USER_PROFILE:
      _.set(newState, 'userData.details.hasProfileFollow', true);
      _.set(newState, 'userData.details.followersCount', followersCount + 1);
      return Object.assign({}, state, newState);
    case UNFOLLOW_USER_PROFILE:
      _.set(newState, 'userData.details.hasProfileFollow', false);
      _.set(newState, 'userData.details.followersCount', followersCount - 1);
      return Object.assign({}, state, newState);
    case ADD_NEW_COMMENT:
      const mockCommentObject = {
        name: 'Mateusz Lazar',
        userPhoto: mockedProfile.details.userPhoto,
        commentDate: 0,
        content: action.payload
      };
      newState.userData.comments = [...state.userData.comments, mockCommentObject];
      return Object.assign({}, state, newState);
    default:
      return state;
  }
}

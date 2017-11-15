import { combineReducers } from 'redux';
import profile from './profileReducer';
import shared from './sharedReducer';

const rootReducer = combineReducers({
  profile,
  shared,
});

export default rootReducer;

import { combineReducers } from 'redux-immutable';
import repo from './repo';

const appReducer = combineReducers({
  repo
});

const rootReducer = (state, action) => {
  return appReducer(state, action)
};
export default rootReducer;

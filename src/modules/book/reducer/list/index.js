import { combineReducers } from 'redux';
import ids from './ids';
import params from './params';
import total from './total';

export default combineReducers({
  ids,
  params,
  total
});

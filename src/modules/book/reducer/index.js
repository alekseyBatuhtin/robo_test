import { combineReducers } from 'redux';
import data from './data-reducer';
import totalBooks from './total-books-reducer';

export default combineReducers({
  data,
  totalBooks
});

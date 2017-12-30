import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import bookReducer from './book/reducer';
import suggestionsReducer from './suggestions/reducer';

export default combineReducers({
  form: formReducer,
  routing: routerReducer,
  book: bookReducer,
  suggestions: suggestionsReducer
});

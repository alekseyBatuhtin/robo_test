import { GET_SUGGESTIONS_SUCCESS, CLEAR_SUGGESTIONS } from '../actions';
import { createReducer } from '../../utils';
import { map } from 'lodash/fp';

export default createReducer([], {
  [GET_SUGGESTIONS_SUCCESS](state, { payload }) {
    return map(suggestion => ({ label: suggestion }), payload[1]); // ["ob", ["obi 1 kenobi", "obsidian", "obey"]] need array of results
  },
  [CLEAR_SUGGESTIONS]() {
    return [];
  }
});

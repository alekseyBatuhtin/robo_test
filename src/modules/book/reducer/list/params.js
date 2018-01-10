import { keyBy } from 'lodash/fp';
import { GET_BOOK_LIST_SUCCESS } from '../actions';
import { createReducer } from '../../utils';

const defaultState = {
  page: 1,
  hasMore: true
};

export default createReducer(defaultState, {
  [GET_BOOK_LIST_SUCCESS](state, { payload, requestPayload }) {
    return { ...state, hasMore: true };
  }
});

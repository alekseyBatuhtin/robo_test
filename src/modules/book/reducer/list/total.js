import { GET_BOOK_LIST_SUCCESS } from '../../actions';
import { createReducer } from '../../../utils';

export default createReducer(0, {
  [GET_BOOK_LIST_SUCCESS](state, { payload }) {
    return payload.totalItems;
  }
});

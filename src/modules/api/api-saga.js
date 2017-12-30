import { put, call, takeEvery } from 'redux-saga/effects';

import restClient from './api';
import { GET_BOOK_LIST } from '../book/actions';
import { GET_SUGGESTIONS } from '../suggestions/actions';

function* handleFetch(action) {
  const { type, payload } = action;

  yield put({ type: `${type}_LOADING`, payload });

  try {
    const { response } = yield call(restClient, type, payload);

    yield put({
      type: `${type}_SUCCESS`,
      payload: response,
      requestPayload: payload
    });
  } catch (error) {
    yield put({
      type: `${type}_FAILURE`,
      error: error.message ? error.message : error,
      requestPayload: payload
    });
  }
}

export default function* watchFetch() {
  yield takeEvery([GET_BOOK_LIST, GET_SUGGESTIONS], handleFetch);
}

// forked from https://raw.githubusercontent.com/marmelab/admin-on-rest/master/src/sideEffect/saga/index.js

import { fork } from 'redux-saga/effects';
import apiSaga from './api/api-saga';

export const sagas = [apiSaga];

export default function* rootSaga() {
  for (const saga of sagas) {
    yield fork(saga);
  }
}

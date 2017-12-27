// forked from https://raw.githubusercontent.com/marmelab/admin-on-rest/master/src/sideEffect/saga/index.js

import { fork } from 'redux-saga/effects';

export const sagas = [];

export default function* rootSaga() {
  for (const saga of sagas) {
    yield fork(saga);
  }
}

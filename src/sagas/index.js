import { all } from 'redux-saga/effects';
import taskSagas from './taskSaga';

export default function* rootSaga() {
  yield all([
    ...taskSagas,
  ]);
}

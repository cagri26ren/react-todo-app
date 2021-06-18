/* eslint-disable no-alert */
import { takeEvery, call, put } from 'redux-saga/effects';
import api from '../lib/api/axios';
import { getData, getResponseCode } from '../lib/api/axios/axiosUtil';

function* addTask(action) {
  const name = action.payload;

  if (action.payload === '') {
    alert('Cannot add empty named task');
    return;
  }

  const response = yield call(api.addTask, { name });
  const responseContent = getData(response);

  if (getResponseCode(response) === 200) {
    yield put({
      type: 'TASK_ADD',
      payload: name,
    });
  } else {
    alert(responseContent.message);
  }
}

const taskSagas = [
  takeEvery('TASK_ADD_ASYNC', addTask),
];
export default taskSagas;

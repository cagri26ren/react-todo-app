/* eslint-disable no-alert */
import {
  takeEvery, call, put,
} from 'redux-saga/effects';
import api from '../lib/api/axios';
import { getData, getResponseCode } from '../lib/api/axios/axiosUtil';

function* getTasks() {
  const response = yield call(api.fetchTasks);
  const responseContent = getData(response);

  if (getResponseCode(response) === 200) {
    yield put({
      type: 'TASK_GET',
      payload: responseContent,
    });
  } else {
    alert(responseContent.message);
  }
}

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
      payload: {
        index: parseInt(responseContent, 10),
        newName: name,
      },
    });
  } else {
    alert(responseContent.message);
  }
}

function* editTask(action) {
  const name = action.payload.newName;
  const id = action.payload.index;

  yield put({
    type: 'TASK_EDIT',
    payload: {
      index: id,
      newName: name,
    },
  });

  const response = yield call(api.editTaskName, { id, name });
  const responseContent = getData(response);

  if (getResponseCode(response) !== 200) {
    alert(responseContent.message);
    yield put({
      type: 'TASK_GET',
    });
  }
}

function* checkTask(action) {
  const id = action.payload;
  console.log(id);

  const response = yield call(api.editTaskCheck, { id });
  const responseContent = getData(response);

  if (getResponseCode(response) === 200) {
    yield put({
      type: 'TASK_CHECK',
      payload: {
        index: id,
      },
    });
  } else {
    alert(responseContent.message);
  }
}

function* deleteTask(action) {
  const id = action.payload;

  const response = yield call(api.deleteTask, { id });
  const responseContent = getData(response);

  if (getResponseCode(response) === 200) {
    yield put({
      type: 'TASK_DELETE',
      payload: {
        index: id,
      },
    });
  } else {
    alert(responseContent.message);
  }
}

const taskSagas = [
  takeEvery('TASK_GET_ASYNC', getTasks),
  takeEvery('TASK_ADD_ASYNC', addTask),
  takeEvery('TASK_EDIT_ASYNC', editTask),
  takeEvery('TASK_CHECK_ASYNC', checkTask),
  takeEvery('TASK_DELETE_ASYNC', deleteTask),
];
export default taskSagas;

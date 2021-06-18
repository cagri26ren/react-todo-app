import { createSelector } from 'reselect';
// eslint-disable-next-line import/prefer-default-export
export const getTaskList = (state) => state.task;

// eslint-disable-next-line import/prefer-default-export
export const getReversedTaskList = createSelector([getTaskList], (task) => {
  const arr = [];
  for (let i = task.length - 1; i >= 0; i -= 1) {
    arr.push(task[i]);
  }
  return arr;
});

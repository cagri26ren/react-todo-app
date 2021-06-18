// eslint-disable-next-line import/prefer-default-export
export const addTask = (name) => ({
  type: 'TASK_ADD_ASYNC',
  payload: name,
});

// eslint-disable-next-line import/prefer-default-export
export const deleteTask = (index) => ({
  type: 'TASK_DELETE',
  payload: index,
});

// eslint-disable-next-line import/prefer-default-export
export const checkTask = (index) => ({
  type: 'TASK_CHECK',
  payload: index,
});

export const editTask = (index, newName) => ({
  type: 'TASK_EDIT',
  payload: { index, newName },
});

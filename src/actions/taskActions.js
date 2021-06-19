// eslint-disable-next-line import/prefer-default-export
export const addTask = (name) => ({
  type: 'TASK_ADD_ASYNC',
  payload: name,
});

// eslint-disable-next-line import/prefer-default-export
export const getTasks = () => ({
  type: 'TASK_GET_ASYNC',
});

// eslint-disable-next-line import/prefer-default-export
export const deleteTask = (index) => ({
  type: 'TASK_DELETE_ASYNC',
  payload: index,
});

// eslint-disable-next-line import/prefer-default-export
export const checkTask = (index) => ({
  type: 'TASK_CHECK_ASYNC',
  payload: index,
});

export const editTask = (index, newName) => ({
  type: 'TASK_EDIT_ASYNC',
  payload: { index, newName },
});

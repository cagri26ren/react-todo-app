// eslint-disable-next-line import/prefer-default-export
export const addTODO = (name) => ({
  type: 'TODO_ADD',
  payload: name,
});

// eslint-disable-next-line import/prefer-default-export
export const deleteTODO = (index) => ({
  type: 'TODO_DELETE',
  payload: index,
});

// eslint-disable-next-line import/prefer-default-export
export const checkTODO = (index) => ({
  type: 'TODO_CHECK',
  payload: index,
});

export const editTODO = (index, newName) => ({
  type: 'TODO_EDIT',
  payload: { index, newName },
});

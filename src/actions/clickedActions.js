// eslint-disable-next-line import/prefer-default-export
export const clickedAdd = (index) => ({
  type: 'CLICKED_ADD',
  payload: index,
});

// eslint-disable-next-line import/prefer-default-export
export const clickedRemove = (index) => ({
  type: 'CLICKED_REMOVE',
  payload: index,
});

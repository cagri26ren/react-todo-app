const clickedReducer = (state = [], action) => {
  switch (action.type) {
    case 'CLICKED_ADD':
      for (let i = 0; i < state.length; i += 1) {
        // eslint-disable-next-line eqeqeq
        if (state[i] == action.payload?.index) {
          return state;
        }
      }
      return [...state, action.payload];

    case 'CLICKED_REMOVE':
      for (let i = 0; i < state.length; i += 1) {
        // eslint-disable-next-line eqeqeq
        if (state[i] == action.payload?.index) {
          return state.splice(i, 1);
        }
      }
      return state;

    default: {
      return state;
    }
  }
};
export default clickedReducer;

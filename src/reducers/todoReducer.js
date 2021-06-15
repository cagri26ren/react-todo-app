const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'TODO_ADD':
      return [...state, { id: state[state.length - 1].id, name: action.payload, checked: false }];

    case 'TODO_CHECK':
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }

        return {
          ...todo, checked: !todo.checked,
        };
      });

    case 'TODO_DELETE':
      for (let i = 0; i < state.length; i += 1) {
        // eslint-disable-next-line eqeqeq
        if (state[i].id == action.payload) {
          return state.splice(i, 1);
        }
      }
      return state;

    default: {
      return state;
    }
  }
};
export default todoReducer;

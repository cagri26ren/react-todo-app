const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'TODO_ADD':
      return [...state,
        {
          // eslint-disable-next-line eqeqeq
          id: (state.length != 0) ? state[state.length - 1].id + 1 : 0,
          name: action.payload,
          checked: false,
        },
      ];

    case 'TODO_CHECK':
      return state.map((todo) => {
        // eslint-disable-next-line eqeqeq
        if (todo.id != action.payload) {
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
          const arr = [...state];
          arr.splice(i, 1);
          return arr;
        }
      }
      return state;

    case 'TODO_EDIT':
      return state.map((todo) => {
        // eslint-disable-next-line eqeqeq
        if (todo.id != action.payload.index) {
          return todo;
        }

        return {
          ...todo, name: action.payload.newName,
        };
      });

    default: {
      return state;
    }
  }
};
export default todoReducer;

const taskReducer = (state = [], action) => {
  switch (action.type) {
    case 'TASK_ADD':
      if (action.payload !== '') {
        return [...state,
          {
            // eslint-disable-next-line eqeqeq
            id: (state.length != 0) ? state[state.length - 1].id + 1 : 0,
            name: action.payload,
            checked: false,
          },
        ];
      }
      return state;

    case 'TASK_CHECK':
      return state.map((task) => {
        // eslint-disable-next-line eqeqeq
        if (task.id != action.payload) {
          return task;
        }

        return {
          ...task, checked: !task.checked,
        };
      });

    case 'TASK_DELETE':
      for (let i = 0; i < state.length; i += 1) {
        // eslint-disable-next-line eqeqeq
        if (state[i].id == action.payload) {
          const arr = [...state];
          arr.splice(i, 1);
          return arr;
        }
      }
      return state;

    case 'TASK_EDIT':
      return state.map((task) => {
        // eslint-disable-next-line eqeqeq
        if (task.id != action.payload.index) {
          return task;
        }

        return {
          ...task, name: action.payload.newName,
        };
      });

    default: {
      return state;
    }
  }
};
export default taskReducer;

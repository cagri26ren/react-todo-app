const taskReducer = (state = [], action) => {
  switch (action.type) {
    case 'TASK_GET':
      // eslint-disable-next-line no-case-declarations
      const newState = [];
      for (let i = 0; i < action.payload.length; i += 1) {
        // eslint-disable-next-line eqeqeq
        const newChecked = (action.payload[i].checked == '1');
        const newId = parseInt(action.payload[i].id, 10);
        newState.push({
          id: newId,
          name: action.payload[i].name,
          checked: newChecked,
        });
      }
      return newState;
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
      // eslint-disable-next-line no-case-declarations
      const checkArr = [...state];
      for (let i = 0; i < checkArr.length; i += 1) {
        if (checkArr[i].id === action.payload.index) {
          const newChecked = !checkArr[i].checked;
          checkArr[i] = ({
            id: checkArr[i].id,
            name: checkArr[i].name,
            checked: newChecked,
          });
        }
      }
      return checkArr;

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

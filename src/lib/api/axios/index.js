import axios from 'axios';

const fetchTasks = () => axios.get('https://c-eren.jotform.dev/intern-api/v1/tasks');

const addTask = (data) => axios.post(`https://c-eren.jotform.dev/intern-api/v1/task/${data.name}`);

const editTaskName = (data) => axios({
  method: 'put',
  url: `https://c-eren.jotform.dev/intern-api/v1/task/name/${data.id}`,
  data: {
    name: data.name,
  },
});

const editTaskCheck = (data) => axios.put(`https://c-eren.jotform.dev/intern-api/v1/task/check/${data.id}`);

const deleteTask = (data) => axios.delete(`https://c-eren.jotform.dev/intern-api/v1/task/${data.id}`);

const api = {
  fetchTasks,
  addTask,
  editTaskName,
  editTaskCheck,
  deleteTask,
};

export default api;

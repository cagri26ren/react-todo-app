import axios from 'axios';

const fetchTasks = () => axios.get('https://c-eren.jotform.dev/intern-api/v1/tasks');

const addTask = (data) => axios({
  method: 'post',
  url: 'https://c-eren.jotform.dev/intern-api/v1/tasks/',
  data: {
    name: data.name,
  },
});

const editTaskName = (data) => axios({
  method: 'put',
  url: `https://c-eren.jotform.dev/intern-api/v1/tasks/name/${data.id}`,
  data: {
    name: data.name,
  },
});

const editTaskCheck = (data) => axios.put(`https://c-eren.jotform.dev/intern-api/v1/tasks/check/${data.id}`);

const deleteTask = (data) => axios.delete(`https://c-eren.jotform.dev/intern-api/v1/tasks/${data.id}`);

const api = {
  fetchTasks,
  addTask,
  editTaskName,
  editTaskCheck,
  deleteTask,
};

export default api;

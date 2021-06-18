import axios from 'axios';

const fetchTasks = () => axios.get('https://c-eren.jotform.dev/intern-api/v1/tasks');

const addTask = (name) => axios.get(`https://c-eren.jotform.dev/intern-api/v1/task/${name}`);

const editTaskName = ({ id, data }) => axios.get(`https://c-eren.jotform.dev/intern-api/v1/task/name/${id}`, data);

const editTaskCheck = (id) => axios.get(`https://c-eren.jotform.dev/intern-api/v1/task/check/${id}`);

const deleteTask = (id) => axios.get(`https://c-eren.jotform.dev/intern-api/v1/task/${id}`);

const api = {
  fetchTasks,
  addTask,
  editTaskName,
  editTaskCheck,
  deleteTask,
};

export default api;

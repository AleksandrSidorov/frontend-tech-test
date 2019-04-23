import { fetch } from 'whatwg-fetch';
const baseUrl = 'http://localhost:9001';

function getTodos() {
  return fetch(`${baseUrl}/tasks/?order=desc`, { mode: 'cors' })
    .then(res => res.json())
    .catch(err => console.error(err));
}

function getTodo(id) {
  return fetch(`${baseUrl}/task/${id}`, { mode: 'cors' })
    .then(res => res.json())
    .catch(err => console.error(err));
}

function putTodo(id, title, description) {
  return fetch(`${baseUrl}/task/update/${id}/${title}/${description}`, { mode: 'cors', method: 'PUT' });
}

function postTodo(title, description) {
  return fetch(`${baseUrl}/task/create/${title}/${description}/`, { mode: 'cors', method: 'POST' });
}

function deleteTodo(id) {
  return fetch(`${baseUrl}/task/delete/${id}`, { mode: 'cors', method: 'DELETE' });
}

export default {
  getTodos,
  getTodo,
  putTodo,
  postTodo,
  deleteTodo,
};

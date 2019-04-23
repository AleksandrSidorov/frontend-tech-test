export const TODOS_FETCH_REQUESTED = 'POKEMONS_FETCH_REQUESTED';
export const TODOS_FETCH_RECEIVED = 'POKEMONS_FETCH_RECEIVED';
export const TODOS_FETCH_FAILED = 'POKEMONS_FETCH_FAILED';
export const TODO_POST_REQUESTED = 'TODO_POST_REQUESTED';
export const TODO_DELETE_REQUESTED = 'TODO_DELETE_REQUESTED';
export const TODO_FETCH_REQUESTED = 'TODO_FETCH_REQUESTED';
export const TODO_FETCH_RECEIVED = 'TODO_FETCH_RECEIVED';
export const TODO_PUT_REQUESTED = 'TODO_PUT_REQUESTED';
export const TODO_CHANGE_TITLE = 'TODO_CHANGE_TITLE';
export const TODO_CHANGE_DESCRIPTION = 'TODO_CHANGE_DESCRIPTION';

export function requestTodos() {
  return {
    type: TODOS_FETCH_REQUESTED,
  };
}

export function receiveTodos(todos) {
  return {
    type: TODOS_FETCH_RECEIVED,
    todos,
  };
}

export function postTodo(title, description) {
  return {
    type: TODO_POST_REQUESTED,
    title,
    description,
  };
}

export function deleteTodo(id) {
  return {
    type: TODO_DELETE_REQUESTED,
    id,
  };
}

export function receiveTodosFailed(err) {
  return {
    type: TODOS_FETCH_FAILED,
    err,
  };
}

export function requestTodo(id) {
  return {
    type: TODO_FETCH_REQUESTED,
    id,
  };
}

export function receiveTodo(title, description) {
  return {
    type: TODO_FETCH_RECEIVED,
    title,
    description,
  };
}

export function putTodo(id, title, description) {
  return {
    type: TODO_PUT_REQUESTED,
    id,
    title,
    description,
  };
}

export function changeTitleTodo(title) {
  return {
    type: TODO_CHANGE_TITLE,
    title,
  };
}

export function changeDescriptionTodo(description) {
  return {
    type: TODO_CHANGE_DESCRIPTION,
    description,
  };
}

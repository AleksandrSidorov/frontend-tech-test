import { combineReducers } from 'redux';
import {
  TODOS_FETCH_REQUESTED,
  TODOS_FETCH_RECEIVED,
  TODO_FETCH_REQUESTED,
  TODO_FETCH_RECEIVED,
  TODO_CHANGE_TITLE,
  TODO_CHANGE_DESCRIPTION,
} from './actions';

const initialTodosState = {
  todos: [],
  isFetching: false,
};

const initialTodoState = {
  title: '',
  description: '',
  isFetching: false,
};

function todos(state=initialTodosState, action) {
  switch (action.type) {
    case TODOS_FETCH_REQUESTED:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case TODOS_FETCH_RECEIVED:
      return Object.assign({}, state, {
        todos: [...action.todos],
        isFetching: false,
      });
    default:
      return state;
  }
}

function todo(state=initialTodoState, action) {
  switch (action.type) {
    case TODO_FETCH_REQUESTED:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case TODO_FETCH_RECEIVED:
      return Object.assign({}, state, {
        title: action.title,
        description: action.description,
        isFetching: false,
      });
    case TODO_CHANGE_TITLE:
      return Object.assign({}, state, {
        title: action.title,
      });
    case TODO_CHANGE_DESCRIPTION:
      return Object.assign({}, state, {
        description: action.description,
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  todos,
  todo,
});

export default rootReducer;

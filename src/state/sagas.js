import {
  put,
  call,
  all,
  fork,
  takeLatest,
} from 'redux-saga/effects';
import * as actions from './actions';
import api from './api';

export function* getTodos() {
  try {
    const res = yield call(api.getTodos);
    yield put(actions.receiveTodos(res.tasks));
  } catch (err) {
    console.error('saga error');
    yield put(actions.receiveTodosFailed(err.message));
  }
}

export function* watchFetchTodos() {
  yield takeLatest(actions.TODOS_FETCH_REQUESTED, getTodos);
}

export function* postTodo(action) {
  try {
    const res = yield call(api.postTodo, action.title, action.description);
    if (res.status === 201) {
      yield put(actions.requestTodos());
    }
  } catch (err) {
    console.error(err);
  }
}

export function* watchPostTodo() {
  yield takeLatest(actions.TODO_POST_REQUESTED, postTodo);
}

export function* deleteTodo(action) {
  try {
    const res = yield call(api.deleteTodo, action.id);
    if (res.status === 200) {
      yield put(actions.requestTodos());
    }
  } catch (err) {
    console.error(err);
  }
}

export function* watchDeleteTodo() {
  yield takeLatest(actions.TODO_DELETE_REQUESTED, deleteTodo);
}

export function* getTodo(action) {
  try {
    const res = yield call(api.getTodo, action.id);
    yield put(actions.receiveTodo(res.task.title, res.task.description));
  } catch (err) {
    yield put(actions.receiveTodosFailed(err.message));
  }
}

export function* watchFetchTodo() {
  yield takeLatest(actions.TODO_FETCH_REQUESTED, getTodo);
}

export function* putTodo(action) {
  try {
    yield call(api.putTodo, action.id, action.title, action.description);
  } catch (err) {
    console.error(err);
  }
}

export function* watchPutTodo() {
  yield takeLatest(actions.TODO_PUT_REQUESTED, putTodo);
}


export default function* rootSaga() {
  yield all([
    fork(watchFetchTodos),
    fork(watchPostTodo),
    fork(watchDeleteTodo),
    fork(watchFetchTodo),
    fork(watchPutTodo),
  ]);
}

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from "@reach/router"

import configureStore from './state/configureStore';
import rootSaga from './state/sagas';
import App from './App';
import EditTodo from './components/EditTodo';

const store = configureStore();
store.runSaga(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App path="/" />
      <EditTodo path="todo/:id" />
    </Router>
  </Provider>,
  document.getElementById('app')
);

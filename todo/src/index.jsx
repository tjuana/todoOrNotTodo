import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Todo from './contaner/Todo.jsx';
import { store } from './store/configureStore.jsx';

ReactDOM.render(
  <Provider store={store}>
    <Todo />
  </Provider>,
  document.getElementById('root'),
);

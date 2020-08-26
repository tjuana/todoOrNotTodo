import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Todo from './Todo';
import { store } from './store/configureStore';

ReactDOM.render(
  <Provider store={store}>
    <Todo />
  </Provider>,
  document.getElementById('root'),
);

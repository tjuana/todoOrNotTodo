import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/configureStore.jsx';
import Todo from './contaner/Todo.jsx';

const App = () => (
  <>
    <Provider store={store}>
      <Todo />
    </Provider>
  </>
);

export default App;

export { App as AppSnap };

import React from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './store/ducks';
import sagas from './store/sagas';

import Routes from './Routes';

const middleware = createSagaMiddleware();
const store = createStore(combineReducers(reducers), applyMiddleware(middleware));

middleware.run(sagas);

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;

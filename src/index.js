import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App' ;
import { pokemonsReducers } from './reducers/pokemons';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { featuring, logger, pokePrefix } from './middlewares';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const composedEnhansed = compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(logger, featuring, pokePrefix))

const store = createStore(
  pokemonsReducers,
  composedEnhansed
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App' ;
import { pokemonsReducers } from './reducers/pokemons';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { logger, pokePrefix } from './middlewares';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhansed = composeAlt(applyMiddleware(thunk, logger, pokePrefix));

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

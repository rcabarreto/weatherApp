import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import {loaderReducer, locationReducer, weatherReducer, errorReducer} from 'reducers'

export var configure = (initialState = {}) => {

  let reducer = combineReducers({
    loader: loaderReducer,
    location: locationReducer,
    weather: weatherReducer,
    error: errorReducer
  });

  let store = createStore(reducer, initialState, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};

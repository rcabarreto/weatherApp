import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import {loaderReducer, locationReducer, weatherReducer, errorReducer} from '../reducers/reducers'

export var configure = (initialState = {}) => {

  let reducer = combineReducers({
    loader: loaderReducer,
    location: locationReducer,
    weather: weatherReducer,
    error: errorReducer
  });

  let store = createStore(reducer, initialState, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  ));

  return store;
};

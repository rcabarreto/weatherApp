import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import {isLoadingReducer, locationReducer, weatherReducer, errorReducer} from 'reducers'

export var configure = (initialState = {}) => {

  let reducer = combineReducers({
    isLoading: isLoadingReducer,
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

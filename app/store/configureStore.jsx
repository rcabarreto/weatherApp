import * as redux from 'redux';
import thunk from 'redux-thunk';

import {isLoadingReducer, locationReducer, weatherReducer, errorReducer} from 'reducers'

export var configure = (initialState = {}) => {

  let reducer = redux.combineReducers({
    isLoading: isLoadingReducer,
    location: locationReducer,
    weather: weatherReducer,
    error: errorReducer
  });

  let store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};

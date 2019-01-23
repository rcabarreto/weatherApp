import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { loaderReducer, coordsReducer, locationReducer, weatherReducer, errorReducer } from '../reducers/reducers'

export default (initialState = {}) => {
  const reducer = combineReducers({
    loader: loaderReducer,
    coords: coordsReducer,
    location: locationReducer,
    weather: weatherReducer,
    error: errorReducer,
  })

  const store = createStore(reducer, initialState, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  ))

  return store
}

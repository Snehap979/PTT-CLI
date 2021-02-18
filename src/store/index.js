
import { combineReducers, createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'
import { ClientReducer } from './client'

const reducers = combineReducers({ 
 
  client: ClientReducer,
 
})

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk))

// Security.initialize(store)

export default store

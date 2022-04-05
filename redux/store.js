import { createStore, applyMiddleware, compose  } from 'redux';
import mainReducer from './reducers'
import thunkMiddleware from 'redux-thunk'
import { logger } from 'redux-logger'


export default createStore(
    mainReducer,
    applyMiddleware(thunkMiddleware)
);
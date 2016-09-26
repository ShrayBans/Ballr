import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers/index.js';

const middleware = applyMiddleware(promise(), thunk, logger());
export default createStore(reducers, middleware);
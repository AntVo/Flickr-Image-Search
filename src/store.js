import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import fetchImages from './reducers/fetchImages';

export default(initialState) => {
	return createStore(fetchImages, initialState, compose(applyMiddleware(thunk, logger)));
}
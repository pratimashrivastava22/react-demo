import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import Immutable from 'immutable';
import rootSaga from '../sagas';

export default function configureStore(initialState) {
	initialState = initialState ? Immutable.fromJS(initialState) : Immutable.Map();
	let sagaMiddleware = createSagaMiddleware();
	const enhancer = compose(
		applyMiddleware(
			sagaMiddleware,
		),
	);
	const store = createStore(
		rootReducer,
		initialState,
		enhancer
	);

	sagaMiddleware.run(rootSaga);
	return store;
}
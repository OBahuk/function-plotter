import { createStore, applyMiddleware } from 'redux';

import reducer from './reducer';
import { sagaMiddleware, watcherSaga } from '../sagas';

const defaultState = {
    isLoading: false,
    functions: [],
    error: false
};
//@ts-ignore
export default createStore(reducer, defaultState, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watcherSaga);
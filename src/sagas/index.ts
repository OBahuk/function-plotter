import createSagaMiddleware from 'redux-saga';
import { put, takeEvery, call } from 'redux-saga/effects';

import { GET_POINTS } from '../constants';
import { setPoints, setError } from '../redux/actions';
import { ActionTypes, FunctionPoints, GraphData } from '../types';
import { getPointsViaApi, transformAPIData } from '../utils';

export function* getPointsHandler(action: ActionTypes) {
    // @ts-ignore
    const points = yield call(getPointsViaApi, action.payload);
    try {
        const functions: GraphData[] = points.map((item: FunctionPoints) => transformAPIData(item));
        yield put(setPoints(functions));
    } catch (e) {
        yield  put(setError(true))
    }


}

export function* watcherSaga() {
    yield takeEvery(GET_POINTS, getPointsHandler);
}

export const sagaMiddleware = createSagaMiddleware();
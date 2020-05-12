import { GET_POINTS, SET_POINTS, SET_ERROR } from '../constants';

import { RequestParams, GraphData, ActionTypes } from '../types';

export function getPoints(requestParams: RequestParams): ActionTypes {
    return {
        type: GET_POINTS,
        payload: requestParams
    }
}

export function setPoints(functionsPoints: GraphData[]):ActionTypes{
    return {
        type: SET_POINTS,
        payload: functionsPoints
    }
}

export function setError(bool: boolean):ActionTypes{
    return {
        type: SET_ERROR,
        payload: bool
    }
}
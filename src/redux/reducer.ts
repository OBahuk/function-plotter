import { GET_POINTS, SET_POINTS, SET_ERROR } from '../constants';
import { ActionTypes, Store } from '../types'

export default function (store: Store, action: ActionTypes) {
    switch (action.type) {
        case GET_POINTS:
            return {
                ...store,
                isLoading: true,
                error: false
            };
        case SET_POINTS:
            return {
                ...store,
                isLoading: false,
                functions: [...action.payload]
            };
        case SET_ERROR:
            return {
                ...store,
                isLoading: false,
                error: action.payload
            };
        default:
            return store;
    }
}